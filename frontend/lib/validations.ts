import z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Please Enter a Valid Email Address")
    .min(3, "Email Must Be At Least 3 Characters Long"),
  password: z.string().min(6, "Please Enter a Valid Password"),
});
