import { DogInterface, DogUpdateInterface } from "@/interfaces/Dog.interface";
import { createDogService, deleteDogService, getDogByIdService, getDogsService, updateDogService } from "@/services/dogs.service";
import { errorHandle } from "@/utils/error.handle";
import { Request, Response } from "express";



export const createDogCtrl = async (req:Request, res:Response) => {
    const body = req.body as DogInterface
    try {
        const dog = await createDogService(body)
        res.status(201).send(dog)
    } catch (error) {
        errorHandle(error, res)
    }
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
    const {id} = req.params
    try {
        const dog = await getDogByIdService(Number(id))
        res.send(dog)
    } catch (error) {
        errorHandle(error, res)
    }
}

export const updateDogCtrl = async (req:Request, res:Response) => {
    const {id} = req.params
    const body = req.body as DogUpdateInterface
    try {
        const dog = await updateDogService(Number(id), body)
        res.send(dog)
    } catch (error) {
        errorHandle(error, res)
    }
}

export const deleteDogCtrl = async (req:Request, res:Response) => {
    const {id} = req.params
    try {
        const data = await deleteDogService(Number(id))
        res.send(data)
    } catch (error) {
        errorHandle(error, res)
    }
}

