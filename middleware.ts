import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  const { pathname } = req.nextUrl;

//   if (pathname.startsWith("/api/auth") || pathname === "/unauthorized" || pathname === "/") {
//     return NextResponse.next();
//   }

  // No token = redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }

  const role = token.role;

  console.log("token is: ", role);

  // Protect /admin route - only allow admin
  if (pathname.startsWith("/admin") && role !== "admin") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  // Protect /user route - only allow user
  if (pathname.startsWith("/user") && role !== "user") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/","/admin/:path*", "/user/:path*"],
//   matcher: ["/((?!api|_next|static|favicon.ico).*)"],
};