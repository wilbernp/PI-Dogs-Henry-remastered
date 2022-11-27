import { Request, Response } from "express";
import { IDogCreate } from "./Dog.interfaces";

export const createDogCtrl = async (req:Request, res:Response) => {
    const {
        name,
        breedsId, 
        temperamentId,
        min_life_span, 
        max_life_span,
        min_height,
        max_weight,
        min_weight,
        max_height
    } = req.body as IDogCreate
}

export const getDogsCtrl = async (req:Request, res:Response) => {
    
}

export const getDogByIdCtrl = async (req:Request, res:Response) => {
    console.log(typeof req.params.id)
    res.send("hello")
}

export const updateDogCtrl = async (req:Request, res:Response) => {
    
}

export const deleteDogCtrl = async (req:Request, res:Response) => {
    
}