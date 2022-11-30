import { LoginInterface } from "@/interfaces/auth.interfaces";
import { UserInterface, UserResponseInterface } from "@/interfaces/user.interface";
import { loginService, registerService } from "@/services/auth.services";
import { errorHandle } from "@/utils/error.handle";
import { generateToken } from "@/utils/jwt.handle";
import { Request, Response } from "express";

const removePassword = (user: UserResponseInterface) => {
    const { id, name, lastname, email, createdAt, updatedAt} = user

    return { id, name, lastname, email, createdAt, updatedAt}
}

export const registerCtrl = async (req: Request, res: Response) => {
    try {
        const { name, lastname, email, password } = req.body as UserInterface
        const user = await registerService({ name, lastname, email, password })
        const token = await generateToken(user)
        const userRemovedPassword = removePassword(user)

        res.status(201).send({...userRemovedPassword, token})
    } catch (error) {
        errorHandle(error, res)
    }

}

export const loginCtrl = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body as LoginInterface
        const user = await loginService({ email, password })
        const userRemovedPassword = removePassword(user)
        const token = await generateToken(user)
        
        res.send({...userRemovedPassword, token})
    } catch (error) {
        errorHandle(error, res)
    }

}