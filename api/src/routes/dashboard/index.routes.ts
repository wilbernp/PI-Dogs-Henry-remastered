import { handleDinamicImport } from "@/utils/dinamicImport.handle";
import { Router } from "express";

const PATH_ROUTER = `${__dirname}`
const router = Router()

handleDinamicImport(PATH_ROUTER, router)

export {router as dashboardRouter}