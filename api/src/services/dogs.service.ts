import { DogInterface } from "@/interfaces/Dog.interface"
import { Dog } from "@/models/Dog.model"

export const createDogService = async (dog:DogInterface) => {
    const dogCreated = await Dog.create(dog)
    return dogCreated
}

export const getDogsService = async () => {
    return "getDogsService"
}

export const getDogByIdService = async () => {
    return "getDogByIdService"
}

export const updateDogService = async () => {
    return "updateDogsService"
}

export const deleteDogService = async () => {
    return "deleteDogService"
}