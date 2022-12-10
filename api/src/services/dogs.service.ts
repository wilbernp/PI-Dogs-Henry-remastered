import { DogInterface, DogUpdateInterface } from "@/interfaces/Dog.interface"
import { Dog } from "@/models/Dog.model"

export const createDogService = async (dog:DogInterface) => {
    const dogCreated = await Dog.create(dog)
    return dogCreated
}

export const getDogsService = async () => {
    const dogs = await Dog.findAll()
    return dogs
}

export const getDogByIdService = async (id:number) => {
    const dog = await Dog.findByPk(id)
    return dog
}

export const updateDogService = async (id:number, dogUpdate:DogUpdateInterface) => {
    const findDog = await getDogByIdService(id)

    if (!findDog) {
        throw new Error(`The dog with id ${id} does not exist`);
    }
    const dogUpdated = await Dog.update(dogUpdate, {where:{id}, returning:true})
    return  dogUpdated[1][0]
}

export const deleteDogService = async (id:number) => {

    const findDog = await getDogByIdService(id)
    if (!findDog) {
        throw new Error(`The dog with id ${id} does not exist`);
    }

   await Dog.destroy({where:{id}, cascade:true})

   return {message:`Dog  removed successfully`, data:findDog}
}