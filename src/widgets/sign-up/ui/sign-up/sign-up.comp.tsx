'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Typography } from '@mui/material';

import { signUpSchema, SignUpSchema } from '../../model/validation-schemas/sign-up.schema';
import SignUpForm from '../sign-up-form/sign-up.form';

import styles from './sign-up.module.css';
import Link from 'next/link';

type Props = {};

export default function SignUp({}: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: SignUpSchema) => {
    console.log(data);
  };

  return (
    <Box className={styles.SignUpBox}>
      <Typography variant="h5"> Регистрация</Typography>
      <SignUpForm control={control} onSubmit={handleSubmit(onSubmit)} validationErrors={errors} isLoading={true} />
      <Link href={'/signIn'} replace={true}>Вход</Link>
    </Box>
  );
}
