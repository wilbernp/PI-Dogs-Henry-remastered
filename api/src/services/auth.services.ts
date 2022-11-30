import { LoginInterface } from "@/interfaces/auth.interfaces"
import { UserInterface } from "@/interfaces/user.interface"
import { User } from "@/models/User.model"
import { encryptPassword, verifyPassword } from "@/utils/bcrypt.handle"

export const registerService = async (user:UserInterface) => {
    const {name,lastname, email, password} = user
    const passwordHass = await encryptPassword(password)
    const userCreated = await User.create({
        name,
        lastname,
        email,
        password:passwordHass
    })
    return userCreated.dataValues
}

export const loginService = async (user:LoginInterface) => {
    const {email, password} = user
    const findUser = await User.findOne({
        where:{
            email
        }
    })
    if (!findUser) {
        throw new Error("User is not existing!");
    }

    const {dataValues} = findUser
    const isCorrect = await verifyPassword(password, dataValues.password)

    if (!isCorrect) {
        throw new Error("Email or password incorrect!");
    }

    return dataValues
}