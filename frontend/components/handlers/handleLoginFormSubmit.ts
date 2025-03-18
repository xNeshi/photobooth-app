import { formatErrors } from "@/lib/utils";
import { LoginFormType } from "../LoginForm";
import { z } from "zod";
import { loginSchema } from "@/lib/validations";
import { signIn } from "next-auth/react";
import { Session } from "next-auth";

type handleLoginFormSubmitType = {
  e: React.FormEvent<HTMLFormElement>;
  setIsPending: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<
    React.SetStateAction<Record<string, string> | undefined>
  >;
  loginForm: LoginFormType;
  rememberMe: boolean;
};

export const handleLoginFormSubmit = async ({
  e,
  setIsPending,
  setError,
  loginForm,
  rememberMe,
}: handleLoginFormSubmitType) => {
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

export default handleLoginFormSubmit;
