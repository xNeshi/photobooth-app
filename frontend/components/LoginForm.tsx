"use client";

import React, { useState } from "react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import useRememberMe from "./hooks/useRememberMe";
import { loginSchema } from "@/lib/validations";
import { signIn } from "next-auth/react";
import z from "zod";
import { formatErrors } from "@/lib/utils";

export type LoginFormType = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<Record<string, string>>();
  const { rememberMe, setRememberMe } = useRememberMe(setLoginForm);

  const handleLoginFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);

    try {
      if (rememberMe) {
        localStorage.setItem("rememberMeEmail", loginForm.email);
      }

      const formValues = {
        email: loginForm.email,
        password: loginForm.password,
      };

      await loginSchema.parseAsync(formValues);

      await signIn("credentials", loginForm, { redirect: false });

      setIsPending(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        const formattedErrors = formatErrors(fieldErrors);
        setError(formattedErrors as unknown as Record<string, string>);
      } else {
        setError({ credentials: "Invalid Credentials. Try Again." });
      }
      setIsPending(false);
    }
  };

  return (
    <form
      onSubmit={handleLoginFormSubmit}
      className="flex flex-col w-full mphone:w-[375px] items-start justify-center bg-[var(--secondaryBg)] rounded-xl shadow-lg gap-5 p-6 py-8 pb-10"
    >
      <h1 className="text-[23px] w-full text-center font-bold mphone:text-left">
        Log In
      </h1>
      <div className="flex flex-col w-full items-start justify-center gap-3">
        <div className="flex flex-col w-full">
          {error?.credentials && (
            <p className="text-red-500 text-[11px] mphone:text-[14px] mt-1">
              {error.credentials}
            </p>
          )}
          <input
            id="email"
            name="email"
            value={loginForm.email}
            onChange={(e) =>
              setLoginForm({ ...loginForm, email: e.target.value })
            }
            placeholder="Email"
            className="w-full border-b-[1px] px-3 py-1.5 rounded-md bg-[var(--background)]"
          />
          {error?.email && (
            <div className="text-red-500 text-[11px] mphone:text-[14px] mt-1">
              {error.email.split(". ").map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col w-full">
          <input
            type="password"
            id="password"
            name="password"
            value={loginForm.password}
            onChange={(e) =>
              setLoginForm({ ...loginForm, password: e.target.value })
            }
            placeholder="Password"
            className="w-full border-b-[1px] px-3 py-1.5 rounded-md bg-[var(--background)]"
          />
          {error?.password && (
            <p className="text-red-500 text-[11px] mphone:text-[14px] mt-1">
              {error.password}
            </p>
          )}
        </div>

        <label className="flex items-center gap-1.5 pl-2 text-[13px]">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          Remember Me
        </label>
      </div>
      <button
        type="submit"
        className={`${buttonVariants({ variant: "outline" })} w-full`}
        disabled={isPending}
      >
        {isPending ? "Logging In..." : "Submit"}
      </button>

      <span className="inline-flex text-[9px] mphone:text-[12px] -mt-1 gap-1 w-full justify-center">
        Don't have an InstaCuts account?{" "}
        <Link
          href="/"
          className="font-bold active:scale-95 transition-all duration-200 ease-out"
        >
          Register Now!
        </Link>
      </span>
    </form>
  );
};

export default LoginForm;
