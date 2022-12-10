import { RefineOptions } from "@/interfaces/validateBody.interface";
import { NextFunction, Request, Response } from "express";
import { SafeParseReturnType, ZodSchema } from "zod";


export const validateBody = <SchemaType>(
    schema:ZodSchema, 
    refineOptions?:RefineOptions<SchemaType>
    ) =>{

    return (req:Request, res:Response, next:NextFunction) =>{
        let result:SafeParseReturnType<any, any>
        
        if (!refineOptions) {
            result = schema.safeParse(req.body)
        } else {
            result = schema.refine(refineOptions.refineCb, refineOptions.refineObject)
            .safeParse(req.body)
            
        }
        

        if (result.success === false) {
            return res.status(400).json(result.error.issues)
        }
        req.body = result.data
        next()
    }
}
