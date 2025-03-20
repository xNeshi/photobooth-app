import { auth } from "./app/auth";

export default auth((req) => {
  const isAuth = !!req.auth;
  const pathname = req.nextUrl.pathname;

  const isLoginPage =
    pathname === "/" || pathname === "/login" || pathname === "/register"; // Block both "/" and "/login"

  if (isAuth && isLoginPage) {
    return Response.redirect(new URL("/home", req.nextUrl.origin)); // Redirect to another page
  }

  return; // Allow access to all other pages
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
