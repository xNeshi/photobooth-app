"use server";

import z from "zod";
import { signIn } from "@/app/auth";
import { loginSchema, registerSchema } from "./validations";
import { api, extractCookies, formatErrors, sanctum } from "./utils";
import { redirect } from "next/navigation";
import { AxiosHeaders } from "axios";

export async function actionLoginForm(prevState: unknown, formData: FormData) {
  let isSuccess;

  const formValues = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  try {
    await loginSchema.parseAsync(formValues);
    const result = await signIn("credentials", {
      ...formValues,
      redirect: false,
    });

    if (!result?.error) {
      isSuccess = true;
      return { status: "SUCCESS", error: "", fieldData: formValues };
    } else {
      return {
        status: "ERROR",
        error: "Invalid Credentials. Try Again.",
        fieldData: formValues,
      };
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors = error.flatten().fieldErrors;
      const formattedErrors = formatErrors(fieldErrors);
      return {
        status: "ERROR",
        error: "Error in the fields",
        fieldErrors: formattedErrors,
        fieldData: formValues,
      };
    } else {
      return {
        status: "ERROR",
        error: "User Doesn't Exist",
        fieldErrors: { credentials: "Invalid Credentials. Try Again." },
        fieldData: formValues,
      };
    }
  } finally {
    if (isSuccess) {
      redirect("/home");
    }
  }
}

export async function actionRegisterForm(
  prevState: unknown,
  formData: FormData
) {
  let isSuccess;

  const formValues = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  };

  try {
    await registerSchema.parseAsync(formValues);

    const csrfResponse = await sanctum.get("sanctum/csrf-cookie");

    const { xsrfToken, sessionKey } = extractCookies(
      csrfResponse.headers as AxiosHeaders
    );

    const headers = {
      Referer: process.env.NEXT_PUBLIC_FRONTEND_URL!,
      Cookie: `laravel_session=${sessionKey}`,
      "Content-Type": "application/json",
      "X-XSRF-TOKEN": xsrfToken,
    };

    const result = await api.post(
      "register",
      JSON.stringify({
        name: formValues.name,
        email: formValues.email,
        password: formValues.password,
        password_confirmation: formValues.confirmPassword,
      }),
      {
        headers,
      }
    );

    if (result.status === 200 || result.status === 201) {
      isSuccess = true;
      return { status: "SUCCESS", error: "", fieldData: formValues };
    } else {
      return {
        status: "ERROR",
        error: "Something went wrong. Try Again.",
        fieldData: formValues,
      };
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors = error.flatten().fieldErrors;
      const formattedErrors = formatErrors(fieldErrors);
      return {
        status: "ERROR",
        error: "Error in the fields",
        fieldErrors: formattedErrors,
        fieldData: formValues,
      };
    } else {
      return {
        status: "ERROR",
        error: "Something went wrong. Try Again.",
        fieldErrors: {
          email: "Email already exists, try another email.",
        },
        fieldData: formValues,
      };
    }
  } finally {
    if (isSuccess) {
      redirect("/login");
    }
  }
}
