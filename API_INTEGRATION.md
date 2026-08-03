# API Integration Documentation — RentNest

This document maps every frontend page/component in the RentNest Next.js application to the backend REST API endpoints it consumes. The backend is a Node.js / Express / Prisma / PostgreSQL API, mounted under the base path `/api`.

**Base URL:** `process.env.BACKEND_URL`
**Auth:** JWT (access + refresh token via HTTP-only cookies), attached automatically on protected requests. Role-based access is enforced both by backend middleware (`auth(Role.X)`) and by Next.js Middleware on the frontend.

---

## 1. Auth

Base path: `/api/auth`

| Endpoint | Method | Access | Frontend Route / Component | Description |
|---|---|---|---|---|
| `/api/auth/register` | POST | Public | `/auth/register` → `RegisterForm` | Creates a new user with a selected role (Tenant / Landlord) |
| `/api/auth/login` | POST | Public | `/auth/login` → `LoginForm` | Authenticates user, sets access/refresh tokens |
| `/api/auth/me` | GET | Tenant, Landlord, Admin | App shell / `AuthProvider` | Fetches the currently logged-in user's profile; used to hydrate auth state & role on app load |
| `/api/auth/refresh-token` | POST | Public (uses refresh cookie) | Axios/fetch interceptor | Silently refreshes the access token when expired |

---

## 2. Categories

Base path: `/api/categories`

| Endpoint | Method | Access | Frontend Route / Component | Description |
|---|---|---|---|---|
| `/api/categories` | GET | Public | `/properties` → Filter sidebar | Populates property type filter options |
| `/api/categories` | POST | Admin | `/dashboard/admin` → `CategoryForm` | Creates a new property category |

---

## 3. Properties (Public)

Base path: `/api/properties`

| Endpoint | Method | Access | Frontend Route / Component | Description |
|---|---|---|---|---|
| `/api/properties` | GET | Public | `/`, `/properties` → `PropertyGrid`, `PropertyListPage` | Fetches all properties, supports filter query params (location, price range, type, amenities) |
| `/api/properties/:id` | GET | Public | `/properties/[id]` → `PropertyDetailsPage` | Fetches full details of a single property (gallery, landlord info, amenities) |

---

## 4. Landlord

Base path: `/api/landlord`

| Endpoint | Method | Access | Frontend Route / Component | Description |
|---|---|---|---|---|
| `/api/landlord/properties` | POST | Landlord | `/dashboard/landlord/properties/new` → `PropertyForm` (create) | Creates a new property listing |
| `/api/landlord/properties/my-properties` | GET | Landlord | `/dashboard/landlord` → `LandlordPropertyList` | Fetches properties owned by the logged-in landlord |
| `/api/landlord/dashboard/stats` | GET | Landlord | `/dashboard/landlord` → `LandlordOverview` | Total properties, active requests, earnings summary |
| `/api/landlord/properties/requests` | GET | Landlord | `/dashboard/landlord/requests` → `RequestManagementTable` | Fetches incoming rental requests for the landlord's properties |
| `/api/landlord/properties/requests/:id` | PATCH | Landlord | `/dashboard/landlord/requests` → Approve/Reject buttons | Updates a rental request status (`APPROVED` / `REJECTED`), optimistic UI update + toast |
| `/api/landlord/properties/:id` | PUT | Landlord | `/dashboard/landlord/properties/[id]/edit` → `PropertyForm` (edit) | Updates an existing property |
| `/api/landlord/properties/:id` | DELETE | Landlord | `/dashboard/landlord` → Delete action | Removes a property listing |

---

## 5. Rental Requests

Base path: `/api/rentals`

| Endpoint | Method | Access | Frontend Route / Component | Description |
|---|---|---|---|---|
| `/api/rentals` | POST | Tenant | `/properties/[id]` → `RentalRequestForm` (modal) | Submits a new rental request for a property |
| `/api/rentals` | GET | Tenant | `/dashboard/tenant` → Request history table | Fetches all rental requests made by the logged-in tenant |
| `/api/rentals/tenant/dashboard/stats` | GET | Tenant | `/dashboard/tenant` → `TenantOverview` | Summary stats for tenant dashboard |
| `/api/rentals/:id` | GET | Tenant | `/dashboard/tenant/requests/[id]` → Request details view | Fetches full details of a single rental request |

---

## 6. Payments

Base path: `/api/payments`

| Endpoint | Method | Access | Frontend Route / Component | Description |
|---|---|---|---|---|
| `/api/payments/create` | POST | Tenant | `/dashboard/tenant/requests/[id]/pay` → `PaymentInitiation` | Initiates an SSLCommerz payment session for an approved rental request |
| `/api/payments/confirm` | POST | Public (SSLCommerz callback) | `/payment/success`, `/payment/cancel` | Server-to-server / redirect confirmation from SSLCommerz after checkout |
| `/api/payments` | GET | Tenant | `/dashboard/tenant` → `PaymentHistoryTable` | Fetches the logged-in tenant's payment history |
| `/api/payments/:id` | GET | Public* | Payment details / receipt view | Fetches a single payment record. *Note: no `auth` middleware on this route — confirm with backend if this should be protected. |

---

## 7. Reviews

Base path: `/api/reviews`

| Endpoint | Method | Access | Frontend Route / Component | Description |
|---|---|---|---|---|
| `/api/reviews` | POST | Tenant | `/dashboard/tenant` → `ReviewForm` | Submits a review, enabled only when a rental's status is `COMPLETED` |

---

## 8. Admin

Base path: `/api/admin`

| Endpoint | Method | Access | Frontend Route / Component | Description |
|---|---|---|---|---|
| `/api/admin/users` | GET | Admin | `/dashboard/admin` → `UserManagementTable` | Fetches all platform users |
| `/api/admin/admin/stats` | GET | Admin | `/dashboard/admin` → `AdminOverview` | Platform-wide stats (total users, properties, pending requests) — ⚠️ double `/admin` segment, verify route path before wiring up |
| `/api/admin/users/:id` | PATCH | Admin | `/dashboard/admin` → Ban/Unban action | Updates a user's status (`ACTIVE` / `BANNED`) |
| `/api/admin/properties` | GET | Admin | `/dashboard/admin` → `ModerationView` (properties) | Fetches all properties platform-wide for moderation |
| `/api/admin/rentals` | GET | Admin | `/dashboard/admin` → `ModerationView` (rental requests) | Fetches all rental requests platform-wide for moderation |

---

## Route Protection Summary

| Role | Protected Prefixes |
|---|---|
| Tenant | `/dashboard/tenant/*` |
| Landlord | `/dashboard/landlord/*` |
| Admin | `/dashboard/admin/*` |

Enforced via Next.js `middleware.ts`, which decodes the JWT and checks the `role` claim before granting access. Unauthorized users are redirected to `/auth/login`.

## Known Issues / Follow-ups

- `GET /api/admin/admin/stats` — duplicate `/admin` segment from route mounting; confirm intended path is `/api/admin/stats` and fix in `admin.route.ts` if needed.
- `GET /api/payments/:id` — currently has no `auth` middleware; confirm whether it should be restricted to the payment owner.