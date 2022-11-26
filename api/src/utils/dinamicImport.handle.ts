import { Router } from "express"
import { handleCleanFileName } from "./fileName.handle"
import path from "path"
import { readdirSync } from "fs"

export const handleDinamicImport = (path_router:string, router:Router) =>{
    readdirSync(path_router).forEach(filename =>{
        const {cleanName, forImport} = handleCleanFileName(filename)
        if (cleanName !=="index") {
            import(path.resolve(path_router, forImport)).then((moduleRouter) =>{
                router.use(`/${cleanName}`, moduleRouter.router)
            })
        }
        
    })

   
}