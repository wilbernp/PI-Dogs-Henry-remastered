import { NextFunction, Request, Response } from "express";
import { getUserByIdService } from "@/services/user.services";

export const authorization = async (req:Request, res:Response, next:NextFunction) => {
    const {id} = req.user
    const ADMIN = "admin"
    const user = await getUserByIdService(id)

    if (user && user.role === ADMIN) {
        return next()
    } 

    res.sendStatus(401)
}