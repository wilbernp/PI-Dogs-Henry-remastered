import { RefineCb, RefineObject } from "@/interfaces/validateBody.interface";
import { NextFunction, Request, Response } from "express";
import { date, z, ZodSchema, ZodTypeAny } from "zod";



export const validateBody = <SchemaType>(
    schema:ZodSchema, 
    refineCb?:RefineCb<SchemaType>,
    refineObject?:RefineObject,
    ) =>{

    return (req:Request, res:Response, next:NextFunction) =>{
        const result = schema
        .refine(refineCb, refineObject)
        .safeParse(req.body)

        if (result.success === false) {
            return res.status(400).json(result.error.issues)
        }
        req.body = result.data
        next()
    }
}