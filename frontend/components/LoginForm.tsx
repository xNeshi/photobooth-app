"use client";

import React, { useEffect, useState } from "react";
import { buttonVariants } from "./ui/button";
import useRememberMe from "./hooks/useRememberMe";
import handleLoginFormSubmit from "./handlers/handleLoginFormSubmit";
import FormErrorMessage from "./FormErrorMessage";
import FormInput from "./FormInput";
import FormFooter from "./FormFooter";

export type LoginFormType = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<Record<string, string>>();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const { rememberMe, setRememberMe } = useRememberMe(
    loginForm,
    setLoginForm,
    setIsPending
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleLoginFormSubmit({ e, loginForm, setIsPending, setError });
  };

  useEffect(() => {
    return () => {
      setIsPending(false);
    };
  }, []);

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="flex flex-col w-full mphone:w-[375px] items-start justify-center bg-[var(--secondaryBg)] rounded-xl shadow-lg gap-5 p-6 py-8 pb-10"
    >
      <h1 className="text-[23px] w-full text-center font-bold mphone:text-left">
        Log In
      </h1>
      <div className="flex flex-col w-full items-start justify-center gap-3">
        <div className="flex flex-col w-full">
          <span className={`${error?.credentials ? "-mt-5 mb-1" : ""}`}>
            <FormErrorMessage
              error={error}
              errorFor="credentials"
            />
          </span>

          <FormInput
            type="email"
            inputFor="email"
            state={loginForm}
            setState={setLoginForm}
          />
          <FormErrorMessage
            error={error}
            errorFor="email"
            isMultiLine={true}
          />
        </div>
        <div className="flex flex-col w-full">
          <FormInput
            type="password"
            inputFor="password"
            state={loginForm}
            setState={setLoginForm}
          />
          <FormErrorMessage
            error={error}
            errorFor="password"
          />
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

      <FormFooter />
    </form>
  );
};

export default LoginForm;
