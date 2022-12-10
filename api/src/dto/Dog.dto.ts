import { z } from "zod";

export const DogCreateDTO = z.object({
    name:z.string(),
    min_life_span:z.number(),
    max_life_span:z.number(),
    min_height:z.number(),
    max_height:z.number(),
    min_weight:z.number(),
    max_weight:z.number(),
    image_url:z.string()
})

export const DogUpdateDTO = DogCreateDTO.partial()