"use server";

import z from "zod";
import { signIn } from "@/app/auth";
import { loginSchema } from "./validations";
import { formatErrors } from "./utils";
import { revalidatePath } from "next/cache";

export async function actionLoginForm(prevState: unknown, formData: FormData) {
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
  }
}
