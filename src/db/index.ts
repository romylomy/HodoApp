import {Index} from "@upstash/vector"; 
import * as dotenv from 'dotenv'

dotenv.config()
export type bikeRoute = {
    id: string 
    imageId:string
    name: string
    nationalpark: "banff" | "jasper" |  "waterton" 
    description: string
    distance: number
    difficulty: "easy" | "moderate" | "hard"
    trailtype: "single" | "double" | "downhill"

}
export const db = new Index<bikeRoute>()

