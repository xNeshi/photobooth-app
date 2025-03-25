import React from "react";
import { auth } from "@/app/auth";

export const HomePage = async () => {
  const session = await auth();
  const isLoggedIn = session && session?.user;
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen p-3 -mt-32">
        <h1 className="text-3xl font-extrabold mphone:text-[42px] lphone:text-[60px]">
          Welcome, {isLoggedIn ? session.user.name : "Guest"}
        </h1>
      </section>
    </>
  );
};

export default HomePage;
