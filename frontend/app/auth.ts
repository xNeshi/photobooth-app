import { AxiosHeaders } from "axios";
import Credentials from "next-auth/providers/credentials";
import { api, sanctum } from "@/lib/utils";
import NextAuth, { AuthError } from "next-auth";
import { extractCookies } from "@/lib/utils";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Email and Password",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Your Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) null;

        try {
          // Get CSRF cookie
          const csrfResponse = await sanctum.get("sanctum/csrf-cookie");

          // Extract cookies
          const { xsrfToken, sessionKey } = extractCookies(
            csrfResponse.headers as AxiosHeaders
          );

          // Prepare login data
          const loginData = {
            email: credentials.email,
            password: credentials.password,
          };

          // Set headers
          const headers = {
            Referer: process.env.NEXT_PUBLIC_FRONTEND_URL!,
            Cookie: `laravel_session=${sessionKey}`,
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": xsrfToken,
          };

          // Perform login request
          const loginResponse = await api.post(
            "login",
            JSON.stringify(loginData),
            { headers }
          );

          if (loginResponse.status === 200) {
            return loginResponse.data;
          } else {
            throw new Error("Login failed");
          }
        } catch (error) {
          throw new Error("Login failed");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (user && account) {
        token.user = user.data;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
});
