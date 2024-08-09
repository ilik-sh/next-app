'use client'
import React from 'react'
import AddEquipmentForm from '../add-equipment-form/add-equipment.form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { equipmentSchema } from '../../model/validation-schemas/equipment.schema'

type Props = {}

export default function AddEquipment({}: Props) {
    const {register, watch} = useForm({
        mode: 'all',
        resolver: zodResolver(equipmentSchema)
    })
  return (
    <AddEquipmentForm/>
  )
}