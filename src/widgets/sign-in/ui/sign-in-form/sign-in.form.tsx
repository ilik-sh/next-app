"use client";
import React from "react";
import { Control, FieldErrors } from "react-hook-form";
import { SignInSchema } from "../../model/validation-schemas/sign-in.schema";
import TextField from "@/shared/ui/inputs/text-field.comp";
import { LoadingButton as Button } from "@mui/lab";

import styles from "./sign-in-form.module.css";

type SignInFormProps = {
  onSubmit: React.FormEventHandler;
  control: Control<SignInSchema, any>;
  validationErrors: FieldErrors<SignInSchema>;
  isLoading: boolean;
};

export default function SignInForm({
  onSubmit,
  control,
  validationErrors,
  isLoading,
}: SignInFormProps) {
  return (
    <form noValidate onSubmit={onSubmit} className={styles.SignInForm}>
      <TextField
        name="username"
        label="Имя пользователя"
        id="username"
        control={control}
        error={!!validationErrors.username}
        helperText={validationErrors.username?.message}
      />
      <TextField
        name="password"
        label="Пароль"
        id="password"
        control={control}
        error={!!validationErrors.password}
        helperText={validationErrors.password?.message}
      />
      <Button type="submit" variant="outlined" loading={isLoading}>
        Войти
      </Button>
    </form>
  );
}
