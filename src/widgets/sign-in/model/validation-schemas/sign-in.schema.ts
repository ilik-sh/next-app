import { z } from "zod";

export const signInSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Username is too short" })
    .max(50, { message: "Username is too long" }),
  password: z.string().min(8, { message: "Password is too short" }),
});

export type SignInSchema = z.infer<typeof signInSchema>;
