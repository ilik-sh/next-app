import { Eye, EyeOff } from 'lucide-react';
import React from 'react';
import { useState } from 'react';
import { Control, useController } from 'react-hook-form';

import { styled, TextField, TextFieldProps } from '@mui/material';

type PasswordFieldProps = {
  name: string;
  control: Control<any, any>;
} & TextFieldProps;

const PointerDiv = styled('div')({
  cursor: 'pointer',
});

export default function PasswordField({ name, control, ...props }: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { field } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <TextField
      {...props}
      fullWidth
      {...field}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <PointerDiv onClick={handleTogglePasswordVisibility}>{showPassword ? <EyeOff /> : <Eye />}</PointerDiv>
        ),
      }}
    />
  );
}
