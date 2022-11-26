import { Router } from "express";
import { loginController, registerController } from "./auth.controllers";

const router = Router()

router.post("/register", registerController)
router.post("/login", loginController)

export {router as authRouter} 