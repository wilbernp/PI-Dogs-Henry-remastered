import { Request, Response } from "express";

import { handleError } from "../../utils/response.handle"; 
import { registerService, LoginService } from "./auth.services";
import { IUserLogin, IUserRegister } from "./User.interfaces";

export const registerController = async (req:Request, res:Response) =>{
    const user:IUserRegister = req.body
    try {
        const userResponse = await registerService(user)
        res.status(userResponse.status).json(userResponse)
    } catch (error) {
        console.log(error)
        const errorResponse = handleError("Internal server error!", 500)
        res.status(500).json(errorResponse)
    }
}

export const loginController = async (req:Request, res:Response) => {
    const user:IUserLogin = req.body
    try {
        const userResponse = await LoginService(user)
        res.status(userResponse.status).json(userResponse)
        
    } catch (error) {
        const errorResponse = handleError("Internal server error!", 500)
        res.status(500).json(errorResponse)
    }
}