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


    // next()

}

// import { NextFunction, Request, Response } from "express";
// import { JwtPayload, verify } from "jsonwebtoken";

// // interface IPayload {
// //     id:number;
// //     iat:number;
// // }


// export const verifyToken = (req:Request, res:Response, next:NextFunction) =>{
//     const {authorization} = req.headers
//     const token = authorization?.split(" ")[1]
//     try {
//         const decodeToken:JwtPayload | string = verify(token, `${process.env.SECRET}`)

//         next()
//     } catch (error) {
//         console.log(error)
//         next()
//     }
// }

// import jwt, { JwtPayload } from 'jsonwebtoken';
// import { Request, Response, NextFunction } from 'express';



// export interface IPayload {
//     id:number
// }

// export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const token = req.header('Authorization')?.replace('Bearer ', '');

//         if (!token) {
//             throw new Error();
//         }

//         const decoded = jwt.verify(token, process.env.SECRET) as IPayload;
//         req.userId = decoded.id

//         next();
//     } catch (err) {
//         res.status(401).send('Please authenticate');
//     }
// };

