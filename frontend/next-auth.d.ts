import { JWT, Session, User } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      avatar: string | null;
      accessToken: string;
    } & Session["user"];
  }
  interface User {
    data: Session["user"];
  }
}
