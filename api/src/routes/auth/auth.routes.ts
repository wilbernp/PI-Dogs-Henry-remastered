import { loginCtrl, registerCtrl } from "@/controllers/auth.controller";
import { Router } from "express";

const router = Router()

router.post("/register", registerCtrl)
router.post("/login", loginCtrl)

export {router as authRouter}