import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { jwtUtils } from "./utils/jwt";
import { getNewAccessToken } from "./service/refreshToken";
import { JwtPayload } from "jsonwebtoken";

const authRoutes = ["/login", "/register"];

const publicRoutes=["/","/all-properties","/all-properties/:id","/about"]




export async function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const cookieStore = await cookies();

  let accessToken = req.cookies.get("accessToken")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;

  let decodedAccessToken = accessToken
    ? jwtUtils.verifyToken(accessToken, process.env.JWT_ACCESS_SECRET as string)
    : null;

  const decodedRefreshToken = refreshToken
    ? jwtUtils.verifyToken(
        refreshToken,
        process.env.JWT_REFRESH_SECRET as string,
      )
    : null;

  if (!decodedAccessToken?.success && decodedRefreshToken?.success) {
    //access token has expired but refresh token is valid, get new access token from backend
    const result = await getNewAccessToken();

    if (result.success) {
      const newAccessToken = result.data.accessToken;

      cookieStore.set("accessToken", newAccessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        sameSite: "lax",
      });

      accessToken = newAccessToken;
      decodedAccessToken = jwtUtils.verifyToken(
        accessToken!,
        process.env.JWT_ACCESS_SECRET as string,
      );
    }
  }
  let userRole = null;

  if (!decodedAccessToken?.success) {
    //token has expired or is invalid, clear the cookies
    cookieStore.delete("accessToken");
  }
    if(decodedAccessToken?.success && decodedAccessToken.data){
        userRole = (decodedAccessToken.data as JwtPayload).role;
    }


    //user is logged in and trying to access login or register page, redirect to dashboard or root home page
    if(accessToken && authRoutes.includes(pathname)){
        if(userRole === "TENANT"){
            return NextResponse.redirect(new URL('/dashboard', req.url));
        }else if(userRole === "ADMIN"){
            return NextResponse.redirect(new URL('/admin-dashboard', req.url));
        }else if(userRole === "LANDLORD"){
            return NextResponse.redirect(new URL('/landlord-dashboard', req.url));
        }else{
            return NextResponse.redirect(new URL('/', req.url)); //unauth page can be called
        }
    }


    const isPublicRoute = publicRoutes.some((route) => pathname === route || pathname.startsWith(route + "/"));
        const isAuthRoute = authRoutes.some((route) => pathname === route || pathname.startsWith(route + "/"));


        // Authenticated Pages Protection 
    if(!accessToken && !isPublicRoute && !isAuthRoute){
        const loginUrl = new URL('/login', req.url)

        loginUrl.searchParams.set("redirectTo", pathname)

        return NextResponse.redirect(loginUrl);
    }
    // Authorization : Role based access control
    if(pathname.startsWith("/dashboard") && userRole !== "TENANT"){
        return NextResponse.redirect(new URL('/forbidden', req.url));
    }else if(pathname.startsWith("/admin-dashboard") && userRole !== "ADMIN"){
        return NextResponse.redirect(new URL('/forbidden', req.url));
    }else if(pathname.startsWith("/landlord-dashboard") && userRole !== "LANDLORD"){
        return NextResponse.redirect(new URL('/forbidden', req.url));
    }
  return NextResponse.next();
}

export const config = {
  matcher: [
   
    "/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)",
  ],
};
