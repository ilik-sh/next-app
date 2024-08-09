import { z } from "zod";

export const signUpSchema = z
  .object({
    username: z
      .string()
      .min(1, { message: "Имя пользователя слишком короткое" })
      .max(50, { message: "Имя пользователя слишком длинное" }),
    email: z.string().email(),
    password: z.string().min(8, { message: "Пароль слишком короткий" }),
    confirmPassword: z.string(),
  })
  .refine((data) => {
    data.password === data.confirmPassword,
      { message: "Пароли не совпадают", path: ["confirmPassword"] };
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;
