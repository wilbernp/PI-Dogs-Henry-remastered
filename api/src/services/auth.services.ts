import { User } from "../db/models/User.model";
import { IUserLogin, IUserRegister, IUserResponse, IUserTokenPayload } from "../interfaces/User.interfaces";
import { encryptPassword, verifyPassword } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";
import { handleError, handleResponse } from "../utils/response.handle";

const generateUserResponse = (user:IUserResponse):IUserResponse=>{
    console.log(user)
    const {token, id, name, lastname, email, createdAt, updatedAt} = user
    return {token, id, name, lastname, email, createdAt, updatedAt}
}

export const registerService = async (user:IUserRegister) => {
    const {name, lastname, email, password} = user

    const findUser = await User.findOne({
        where:{
            email
        }
    })

    if (findUser) {
        return handleError("User is already registered", 404)
    }
    const passwordHass = await encryptPassword(password)
    const newUser = await User.create({
        name,
        lastname,
        email,
        password: passwordHass
    })

    const {dataValues} = newUser
    
    const token = generateToken(dataValues)
    const userResponse = generateUserResponse({...dataValues, token})
    return handleResponse<IUserResponse>(userResponse, 201)
}

export const LoginService = async(user:IUserLogin) => {
    const {email, password} = user
    const findUser = await User.findOne({
        where:{
            email
        }
    })

    if (!findUser) {
        return handleError("User not Found", 404)
    }

    const {dataValues} = findUser
    const passwordHass = dataValues.password

    const isCorrect = await verifyPassword(password, passwordHass)

    if (!isCorrect) {
        return handleError("Email or Password incorrect!", 403)
    }

    const token = generateToken(dataValues)

    const userResponse = generateUserResponse({...dataValues, token})

    return handleResponse<IUserResponse>(userResponse, 200)
}