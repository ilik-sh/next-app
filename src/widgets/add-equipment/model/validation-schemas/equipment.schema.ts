import { z } from "zod";


export const equipmentSchema = z.object({
    model: z.string(),
    manufacturer: z.string(),
    category: z.string(),
    subcategory: z.string(),
    features: z.record(z.string(), z.string())
})

export type EquipmentSchema = z.infer<typeof equipmentSchema>