import { loginCtrl, registerCtrl } from "@/controllers/auth.controller";
import { createUserDTO, loginUserDTO } from "@/dto/User.dto";
import { validateBody } from "@/middlewares/validateBody.middleware";
import { Router } from "express";
import { z } from "zod";

const router = Router()

type typeCreateUser = z.infer<typeof createUserDTO>

router.post("/register", validateBody<z.infer<typeof createUserDTO>>(createUserDTO, (data) => data.confirm === data.password,{message:"not match"}), registerCtrl)
router.post("/login", validateBody(loginUserDTO), loginCtrl)

export {router as authRouter}