import React from 'react'
import { FieldErrors, RegisterOptions } from 'react-hook-form'
import { EquipmentSchema } from '../../model/validation-schemas/equipment.schema';

type AddEquipmentFormProps = {
  onSubmit: React.FormEventHandler;
  control: RegisterOptions<EquipmentSchema, any>;
  validationErrors: FieldErrors<EquipmentSchema>;
  isLoading: boolean;
}

export default function AddEquipmentForm({onSubmit, control, validationErrors, isLoading}: AddEquipmentFormProps) {
  return (
    <form noValidate onSubmit={onSubmit}>

    </form>
  )
}