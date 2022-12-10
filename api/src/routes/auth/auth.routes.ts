import { loginCtrl, registerCtrl } from "@/controllers/auth.controller";
import { createUserDTO, loginUserDTO } from "@/dto/User.dto";
import { RefineOptions } from "@/interfaces/validateBody.interface";
import { validateBody } from "@/middlewares/validateBody.middleware";
import { Router } from "express";
import { z } from "zod";

const router = Router()

type TypeCreateUser = z.infer<typeof createUserDTO>

const refineOptions:RefineOptions<TypeCreateUser> = {
    refineCb:(options) => options.confirm === options.password,
    refineObject:{message:"Passwords don't match", path:["confirm"]}
}

router.post("/register", validateBody<TypeCreateUser>(createUserDTO, refineOptions), registerCtrl)
router.post("/login", validateBody(loginUserDTO), loginCtrl)

export {router as authRouter}