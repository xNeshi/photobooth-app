import { formatErrors } from "@/lib/utils";
import { LoginFormType } from "../LoginForm";
import { z } from "zod";
import { loginSchema } from "@/lib/validations";
import { signIn } from "next-auth/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type handleLoginFormSubmitType = {
  e: React.FormEvent<HTMLFormElement>;
  loginForm: LoginFormType;
  setIsPending: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<
    React.SetStateAction<Record<string, string> | undefined>
  >;
};

export const handleLoginFormSubmit = async ({
  e,
  loginForm,
  setIsPending,
  setError,
}: handleLoginFormSubmitType) => {
  e.preventDefault();
  setIsPending(true);

  try {
    const formValues = {
      email: loginForm.email,
      password: loginForm.password,
    };

    await loginSchema.parseAsync(formValues);
    const result = await signIn("credentials", {
      ...formValues,
      redirect: false,
    });

    if (!result?.error) {
      window.location.href = "/home";
    } else {
      setError({ credentials: "Invalid Credentials. Try Again." });
      setIsPending(false);
    }
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
