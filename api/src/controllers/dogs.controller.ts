import { DogInterface } from "@/interfaces/Dog.interface";
import { createDogService, deleteDogService, getDogByIdService, getDogsService, updateDogService } from "@/services/dogs.service";
import { errorHandle } from "@/utils/error.handle";
import { Request, Response } from "express";



export const createDogCtrl = async (req:Request, res:Response) => {
    // const {
    //     name, max_height, min_height, 
    //     max_life_span, min_life_span,
    //     max_weight, min_weight, image_url} = req.body as DogInterface
    // try {
    //     const dog = await createDogService()
    //     res.status(201).send(dog)
    // } catch (error) {
    //     errorHandle(error, res)
    // }
}

export const getDogsCtrl = async (req:Request, res:Response) => {
    try {
        const dogs = await getDogsService()
        res.send(dogs)
    } catch (error) {
        errorHandle(error, res)
    }
}

export const getDogByIdCtrl = async (req:Request, res:Response) => {
    try {
        const dog = await getDogByIdService()
        res.send(dog)
    } catch (error) {
        errorHandle(error, res)
    }
}

export const updateDogCtrl = async (req:Request, res:Response) => {
    try {
        const dog = await updateDogService()
        res.send(dog)
    } catch (error) {
        errorHandle(error, res)
    }
}

export const deleteDogCtrl = async (req:Request, res:Response) => {
    try {
        const dog = await deleteDogService()
        res.send(dog)
    } catch (error) {
        errorHandle(error, res)
    }
}

