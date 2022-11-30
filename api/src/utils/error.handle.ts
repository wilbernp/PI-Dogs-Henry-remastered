import { Response } from "express";

export const errorHandle = (error:any, res:Response, status:number = 404) => {
    if (error instanceof Error) {
        return res.status(status).json({mesage: error.message})
    } else {
        return res.status(500).json({mesage: "Internal server error!"})
    }
}