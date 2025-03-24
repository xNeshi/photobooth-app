import { em } from "motion/react-client";
import z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Please Enter a Valid Email Address")
    .min(3, "Email Must Be At Least 3 Characters Long"),
  password: z.string().min(6, "Please Enter a Valid Password"),
});

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, "Name Must Not Be Blank")
      .max(50, "Name Too Long, Must Be Less Than 50 Characters"),
    email: z
      .string()
      .email("Please Enter a Valid Email Address")
      .min(3, "Email Must Be At Least 3 Characters Long"),
    password: z.string().min(6, "Please Enter a Valid Password"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords Do Not Match",
    path: ["confirmPassword"],
  });
