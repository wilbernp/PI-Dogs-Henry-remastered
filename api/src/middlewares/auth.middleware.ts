import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { TokenPayloadInterface } from "@/interfaces/auth.interfaces";
import { errorHandle } from "@/utils/error.handle";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1]

    try {
        if (!token) {
            throw new Error("Please authenticate!")
        }

        const decodedToken = verify(token, process.env.SECRET) as TokenPayloadInterface
        req.user = decodedToken
        next()
    } catch (error) {
        errorHandle(error, res, 401)
    }

}
