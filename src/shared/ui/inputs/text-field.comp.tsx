"use client";
import { FC } from "react";
import { Control, useController } from "react-hook-form";
import {
  TextField as MUITextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

type TextFieldProps = {
  name: string;
  control: Control<any, any>;
} & MuiTextFieldProps;

export default function TextField({ name, control, ...props }: TextFieldProps) {
  const { field } = useController({
    name,
    control,
    rules: { required: true },
  });
  return <MUITextField {...props} {...field} type="input" />;
}
