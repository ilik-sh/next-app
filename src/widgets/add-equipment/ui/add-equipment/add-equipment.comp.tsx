import React from 'react'
import AddEquipmentForm from '../add-equipment-form/add-equipment.form'
import { useForm } from 'react-hook-form'

type Props = {}

export default function AddEquipment({}: Props) {
    const {register, watch} = useForm({
        
    })
  return (
    <AddEquipmentForm/>
  )
}