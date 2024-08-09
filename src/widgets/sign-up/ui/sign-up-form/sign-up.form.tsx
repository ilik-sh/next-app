'use client';

import React from 'react';
import { Control, FieldErrors } from 'react-hook-form';

import { LoadingButton as Button } from '@mui/lab';

import PasswordField from '@/shared/ui/inputs/password-field.comp';
import TextField from '@/shared/ui/inputs/text-field.comp';

import { SignUpSchema } from '../../model/validation-schemas/sign-up.schema';

import styles from './sign-up-form.module.css';

type SignUpFormProps = {
  onSubmit: React.FormEventHandler;
  control: Control<SignUpSchema, any>;
  validationErrors: FieldErrors<SignUpSchema>;
  isLoading: boolean;
};

export default function SignUpForm({ onSubmit, control, validationErrors, isLoading }: SignUpFormProps) {
  return (
    <form noValidate onSubmit={onSubmit} className={styles.SignUpForm}>
      <TextField
        name="username"
        label="Имя пользователя"
        id="username"
        control={control}
        error={!!validationErrors.username}
        helperText={validationErrors.username?.message}
      />
      <TextField
        name="email"
        label="Email"
        id="email"
        control={control}
        error={!!validationErrors.email}
        helperText={validationErrors.email?.message}
      />
      <PasswordField
        name="password"
        label="Пароль"
        id="password"
        control={control}
        error={!!validationErrors.password}
        helperText={validationErrors.password?.message}
      />
      <PasswordField
        name="confirmPassword"
        label="Подтверждение пароля"
        id="confirmPassword"
        control={control}
        error={!!validationErrors.confirmPassword}
        helperText={validationErrors.confirmPassword?.message}
      />
      <Button type="submit" variant="outlined" loading={isLoading}>
        Войти
      </Button>
    </form>
  );
}
