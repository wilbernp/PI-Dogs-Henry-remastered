import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { IUserTokenPayload } from "../interfaces/User.interfaces";
import { handleError } from "../utils/response.handle";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1]

    try {
        if (!token) {
            throw new Error()
        }

        const decodedToken = verify(token, process.env.SECRET) as IUserTokenPayload
        req.user = decodedToken
        next()
    } catch (error) {
        const response = handleError("Please authenticate", 401)
        res.status(401).json(response)
    }

}
