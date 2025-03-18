"use client";

import React, { useState, useActionState, useEffect } from "react";
import { buttonVariants } from "./ui/button";
import { actionLoginForm } from "@/lib/actions";
import { useRouter } from "next/navigation";
import FormErrorMessage from "./FormErrorMessage";
import FormInput from "./FormInput";
import FormFooter from "./FormFooter";

export type LoginFormType = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  // const { rememberMe, setRememberMe } = useRememberMe(
  //   loginForm,
  //   setLoginForm,
  // );
  const router = useRouter();
  const [state, action, isPending] = useActionState(actionLoginForm, undefined);

  useEffect(() => {
    if (state?.status === "SUCCESS") router.push("/home");
  }, [state?.status]);

  return (
    <form
      noValidate
      action={action}
      className="flex flex-col w-full mphone:w-[375px] items-start justify-center bg-[var(--secondaryBg)] rounded-xl shadow-lg gap-5 p-6 py-8 pb-10"
    >
      <h1 className="text-[23px] w-full text-center font-bold mphone:text-left">
        Log In
      </h1>
      <div className="flex flex-col w-full items-start justify-center gap-3">
        <div className="flex flex-col w-full">
          <span
            className={`${state?.fieldErrors?.credentials ? "-mt-5 mb-1" : ""}`}
          >
            <FormErrorMessage
              error={state?.fieldErrors}
              errorFor="credentials"
            />
          </span>

          <FormInput
            type="email"
            inputFor="email"
            fieldData={state?.fieldData.email}
          />
          <FormErrorMessage
            error={state?.fieldErrors}
            errorFor="email"
            isMultiLine={true}
          />
        </div>
        <div className="flex flex-col w-full">
          <FormInput
            type="password"
            inputFor="password"
            fieldData={state?.fieldData.password}
          />
          <FormErrorMessage
            error={state?.fieldErrors}
            errorFor="password"
          />
        </div>

        <label className="flex items-center gap-1.5 pl-2 text-[13px]">
          <input
            type="checkbox"
            // checked={rememberMe}
            // onChange={(e) => setRememberMe(e.target.checked)}
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

      <FormFooter />
    </form>
  );
};

export default LoginForm;
