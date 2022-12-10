import { DogInterface, DogUpdateInterface } from "@/interfaces/Dog.interface"
import { Dog } from "@/models/Dog.model"

export const createDogService = async (dog:DogInterface) => {
    const dogCreated = await Dog.create(dog)
    return dogCreated.dataValues
}

export const getDogsService = async () => {
    const dogs = await Dog.findAll()
    return dogs
}

export const getDogByIdService = async (id:number) => {
    const dog = await Dog.findByPk(id)
    return dog.dataValues
}

export const updateDogService = async (id:number, dogUpdate:DogUpdateInterface) => {
    await validateIfExistingDog(id)
    const dogUpdated = await Dog.update(dogUpdate, {where:{id}, returning:true})
    return  dogUpdated[1][0].dataValues
}

export const deleteDogService = async (id:number) => {

   const findDog = await validateIfExistingDog(id)
   await Dog.destroy({where:{id}, cascade:true})

   return {message:`Dog removed successfully`, data:findDog}
}


const  validateIfExistingDog = async (id:number) => {
    const findDog = await getDogByIdService(id)

    if (!findDog) {
        throw new Error(`The dog with id ${id} does not exist`);
    }

    return findDog
}