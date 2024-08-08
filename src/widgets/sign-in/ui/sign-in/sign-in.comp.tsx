"use client";
import React from "react";
import SignInForm from "../sign-in-form/sign-in.form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SignInSchema,
  signInSchema,
} from "../../model/validation-schemas/sign-in.schema";
import { Box, Typography } from "@mui/material";

import styles from "./sign-in.module.css";
import { LogIn } from "lucide-react";

type Props = {};

export default function SignInModal({}: Props) {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignInSchema>({
    mode: "onSubmit",
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInSchema) => {
    console.log(data);
  };

  return (
    <Box className={styles.SignInBox}>
      <Typography variant="h5">Вход</Typography>
      <SignInForm
        control={control}
        validationErrors={errors}
        onSubmit={handleSubmit(onSubmit)}
        isLoading={false}
      />
    </Box>
  );
}
