import { User } from "@/models/User.model"

export const getUserByIdService = async(id:number) =>{
    const user = await User.findByPk(id)
    return user.dataValues
}