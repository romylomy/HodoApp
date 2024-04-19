import { db } from "@/db"
import { NextRequest } from "next/server"
import {ProductFilterValidator} from "@/lib/validators/product-validator"

class Filter {
    private filters: Map<string, string[]> = new Map()

    hasFilter(){
        return this.filters.size > 0 
    }

    add(key: string, operator: string, value:string | number){
        const filter = this.filters.get(key) || []
        filter.push(`${key} ${operator} ${typeof value === "number" ? value:` "${value}" `}`)

        this.filters.set(key, filter)
    }

    addRaw(key:string, rawFilter:string){
        this.filters.set(key, [rawFilter])
    }

    get(){
        const parts: string[] = [];
        this.filters.forEach((filter, key) => {
        const groupedValues = filter.join(' OR '); 
     parts.push(`(${groupedValues})`);
        });
    return parts.join(' AND '); 
    }
}

    const AVG_ROUTE_DISTANCE = 10
    const MAX_ROUTE_DISTANCE = 20

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const {sort, difficulty, nationalpark, distance, trailtype} = ProductFilterValidator.parse(body.filter);

        const filter = new Filter();
        difficulty.forEach(difficulty => filter.add("difficulty", "=", difficulty));
        nationalpark.forEach(nationalpark => filter.add("nationalpark", "=", nationalpark));
        filter.addRaw("distance", `distance >= ${distance[0]} AND distance <= ${distance[1]}`);
        trailtype.forEach(trailtype => filter.add("trailtype", "=", trailtype));


        const products = await db.query({
            topK: 4, 
            vector: [
                0,
                0,
                0, 
                sort === "none" 
                    ? AVG_ROUTE_DISTANCE 
                    : sort === "distance-asc" 
                    ? 0 
                    : MAX_ROUTE_DISTANCE,

                ],

            includeMetadata: true, 
            filter: filter.hasFilter() ? filter.get() : undefined
        });
        return new Response(JSON.stringify(products));
    } catch (e) {
        console.error(e);
        console.log(req.body);
        return new Response(JSON.stringify({error: "Server error"}), {status: 500});
    }
}
