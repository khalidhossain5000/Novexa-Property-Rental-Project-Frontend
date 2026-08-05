# Novexa Property

**Find & List Rental Properties with Ease**

Novexa is a modern, responsive rental property marketplace built with Next.js. Tenants can browse and filter listings, submit rental requests, and pay securely. Landlords can manage properties and approve/reject requests. Admins moderate the entire platform through a dedicated dashboard.


---

## Setup Guide

### Prerequisites

- Node.js 18+
- A running instance of the RentNest backend API (Express/Prisma/PostgreSQL)
- An [imgbb](https://imgbb.com/) API key for image uploads

### 1. Clone the repository

```bash
git clone https://github.com/khalidhossain5000/Next-Level-Assignment-5.git
cd Next-Level-Assignment-5
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory and add the following:

```dotenv
# Backend API base URL
BACKEND_URL=

# JWT secrets (used for token verification/refresh in Next.js server actions/route handlers)
JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=

# imgbb API key — used for property image uploads (client-accessible)
NEXT_PUBLIC_IMGBB_API_KEY=
```

> ⚠️ `JWT_ACCESS_SECRET` and `JWT_REFRESH_SECRET` must match the secrets used by the backend, since token verification happens on both sides.

### 4. Run the development server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

### 5. Build for production

```bash
npm run build
npm start
```

---

## Main Technologies

- **Next.js** — App Router
- **React** & **TypeScript**
- **Tailwind CSS** — custom theme via CSS variables mapped to utility classes
- **shadcn** + **base-ui/react** — accessible component primitives
- **lucide-react** / **react-icons** — icon system
- **sonner** — toast notifications
- **motion** — animations
- **next-themes** — dark/light theme toggle
- **zod** — schema validation (auth & property forms)
- **jsonwebtoken** — JWT handling for auth/session
- **react-type-animation** — animated banner text
- **react-countup** — animated stat counters
- **Next.js Middleware** — role-based route protection

---

## Features

### Public
- Responsive property grid with optimized images (`next/image`)
- Advanced search & filter (location, price range, type, amenities) on `all-properties`
- Property details page with image gallery and landlord info
- Contact page
- Skeleton/shimmer loaders and graceful error (`error.tsx`, `not-found.tsx`) fallbacks
- `forbidden` page for unauthorized route access

### Tenant
- Registration & login with Zod-validated forms (`authGroup`)
- Rental request flow with status tracking (Pending, Approved, Rejected, Active, Completed)
- Secure payment checkout
- Rental & payment history dashboard
- Post-completion review submission

### Landlord
- `landlord-dashboard` overview (total properties, active requests, earnings)
- Property CRUD with image upload UI (`ImageUploadField`) and availability toggle
- Request management with approve/reject actions

### Admin
- `admin-dashboard` — platform-wide overview (users, properties, pending requests)
- User management with ban/unban actions
- Content moderation across all listings and rental requests

### Shared / Cross-cutting
- Light/dark theme toggle (`ThemeProvider`, `ThemeToggle`)
- Session handling via `getMe`, `logOut`, `refreshToken` services + `proxy.ts`
- Reusable UI: `PrimaryBtn` / `SecondaryBtn`, `Navbar` (with `MobileNavbar`), `Footer`, `SectionTitle`, `ShimmerText`

---

## Folder Structure

```
public/
src/
├── app/
│   ├── (authGroup)/
│   │   ├── _actions/
│   │   ├── _authTypes/
│   │   ├── _components/
│   │   ├── login/
│   │   ├── register/
│   │   └── layout.tsx
│   ├── (dashboardGroup)/
│   │   ├── _actions/
│   │   ├── _components/
│   │   ├── _config/
│   │   ├── _dashboardTypes/
│   │   ├── admin-dashboard/
│   │   ├── dashboard/
│   │   ├── landlord-dashboard/
│   │   └── layout.tsx
│   ├── (publicGroup)/
│   │   ├── _actions/
│   │   ├── _components/
│   │   ├── all-properties/
│   │   ├── contact/
│   │   ├── forbidden/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── error.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   └── not-found.tsx
├── components/
│   ├── ImageUploadField/
│   │   └── ImageUploadField.tsx
│   ├── Loading/
│   ├── shared/
│   │   ├── Button/
│   │   │   ├── PrimaryBtn.tsx
│   │   │   └── SecondaryBtn.tsx
│   │   ├── Footer/
│   │   │   └── Footer.tsx
│   │   ├── Navbar/
│   │   │   ├── MobileNavbar.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── NavLinks.ts
│   │   ├── SectionTitle/
│   │   │   └── SectionTItle.tsx
│   │   ├── ShimmerText/
│   │   └── ThemeToggle/
│   └── ui/                     # shadcn primitives
└── lib/
    ├── providers/
    │   └── ThemeProvider.tsx
    ├── service/
    │   ├── getMe.ts
    │   ├── logOut.ts
    │   └── refreshToken.ts
    ├── utils/
    ├── zod/
    │   ├── authSchema.ts
    │   └── propertySchema.ts
    └── proxy.ts

.env
.gitignore
AGENTS.md
API_INTEGRATION.md
CLAUDE.md
components.json
eslint.config.mjs
next-env.d.ts
next.config.ts
package.json
postcss.config.mjs
README.md
```

---

## Dependencies

```json
{
  "dependencies": {
    "Shadcn":"1.1.0",
    "@base-ui/react": "^1.6.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "jsonwebtoken": "^9.0.3",
    "lucide-react": "^1.27.0",
    "motion": "^12.43.0",
    "next": "16.2.12",
    "next-themes": "^0.4.6",
    "react": "19.2.4",
    "react-countup": "^6.5.3",
    "react-dom": "19.2.4",
    "react-icons": "^5.7.0",
    "react-type-animation": "^3.2.0",
    "shadcn": "^4.16.0",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.6.0",
    "tw-animate-css": "^1.4.0",
    "zod": "^4.4.3"
  }
}
```

## Live and Relevant Links

- **Live Site:** [\[Rent Nest Live\]](https://next-level-assingment-5-rent-nest.vercel.app/)
