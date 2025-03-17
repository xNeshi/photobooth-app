import axios, { AxiosHeaders } from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { api } from "@/lib/utils";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Your Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const res = await api.get("sanctum/csrf-cookie");

        const setCookieHeader = (res.headers as AxiosHeaders)?.get(
          "set-cookie"
        );
        const cookies =
          typeof setCookieHeader === "string"
            ? setCookieHeader.split(", ")
            : [];

        const xsrfToken = cookies
          .find((cookie) => cookie.startsWith("XSRF-TOKEN"))
          ?.split(";")[0]
          .split("=")[1];
        const sessionKey = cookies
          .find((cookie) => cookie.startsWith("laravel_session"))
          ?.split(";")[0]
          .split("=")[1];

        const data = {
          email: credentials?.email,
          password: credentials?.password,
        };

        const headers: { [key: string]: string } = {
          Referrer: process.env.NEXT_PUBLIC_FRONTEND_URL!,
          Cookie: `laravel_session=${sessionKey}`,
          "Content-Type": "application/json",
        };

        if (xsrfToken) headers["X-XSRF-TOKEN"] = xsrfToken;

        try {
          const response = await api.post("login", JSON.stringify(data), {
            headers,
          });

          if (response.status === 200) {
            return response.data;
          } else {
            console.log("HTTP error! Status: ", response.status);
            return { error: "Authenticaiton failed" };
          }
        } catch (error) {
          console.log("Error: ", error);
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (user && account) {
        token.user = user;
        token.accessToken = user.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.access_token as string;
      session.user = token.user;
      return session;
    },
  },
});
