import {z} from "zod"

export const AVAILABLE_DIFFICULTES = ["easy", "moderate", "hard"] as const
export const AVAILABLE_NATIONALPARK = ["banff", "jasper", "waterton"] as const
export const AVAILABLE_TRAILTYPE= ["single", "double", "downhill"] as const


export const AVALABLE_SORT = ["none", "distance-asc", "distance-desc"] as const

export const ProductFilterValidator = z.object({
    difficulty:z.array(z.enum(AVAILABLE_DIFFICULTES )),
    nationalpark:z.array(z.enum(AVAILABLE_NATIONALPARK )),
    sort: z.enum(AVALABLE_SORT),
    distance:z.tuple([z.number(), z.number()]),
    trailtype: z.array(z.enum(AVAILABLE_TRAILTYPE)).optional().default(["single", "double", "downhill"]),
})

export type ProductState = Omit<z.infer<typeof ProductFilterValidator>, "distance"> & {
    distance:{isCustom: boolean; range:[number,number]}
}