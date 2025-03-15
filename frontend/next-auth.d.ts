import { JWT, Session, User } from "next-auth/next";

declare module "next-auth" {
  interface Session {
    accessToken: string;
    user: {
      id: string;
      name: string;
      email: string;
      avatar: string | null;
      accessToken: string;
    } & Session["user"];
  }
  interface User {
    access_token: string;
  }
  interface JWT {
    access_token: string;
  }
}
