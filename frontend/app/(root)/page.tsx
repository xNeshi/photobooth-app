"use client";

import { useTheme } from "next-themes";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Mail, User } from "lucide-react";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <section className="flex items-center justify-center min-h-screen py-2">
        <div className="flex flex-col w-[260px] items-center mphone:w-[320px]">
          <h1 className="text-5xl font-extrabold mphone:text-[62px]">
            InstaCuts
          </h1>
          <h2 className="text-[16.5px] tracking-[.25em] mb-3 mphone:text-[20px] mphone:tracking-[.3em]">
            Online Photobooth
          </h2>
          <h3 className="text-[12px] text-center italic mphone:text-[15px]">
            Instanly snap and cut for fun, stylish, and quick photo strips.
            Capture memories, customize your shots, and share them
            effortlessly—anytime, anywhere!
          </h3>

          <div className="flex flex-col gap-2 w-full p-2 py-6">
            <Link
              href="/login"
              className={`${buttonVariants({ variant: "outline" })}`}
            >
              <User />
              Continue As Guest
            </Link>
            <Link
              href="/login"
              className={`${buttonVariants({ variant: "outline" })} `}
            >
              <Mail />
              Sign In / Login
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
