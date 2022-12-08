import { ZodTypeAny } from "zod"

export const refineZodErrors = <T extends ZodTypeAny>(schema:T) =>{
   const schemaRefined = schema.refine((data) => {
    if (data.password === data.confirm) {
        return {message:"Passwords don`t match", path:["confirm"]}
    }
   })
   return schemaRefined
}