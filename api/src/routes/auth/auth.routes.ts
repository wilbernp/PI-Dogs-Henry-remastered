import { loginController, registerController } from "@/components/Users/auth.controllers";
import { Router } from "express";

const router = Router()

router.post("/register", registerController)
router.post("/login", loginController)

export {router as authRouter}