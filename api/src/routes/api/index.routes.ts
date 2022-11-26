import { Router } from "express";
import { handleDinamicImport } from "../../utils/dinamicImport.handle";

const PATH_ROUTER = `${__dirname}`
const router = Router()

handleDinamicImport(PATH_ROUTER, router)

export {router as apiRouter}