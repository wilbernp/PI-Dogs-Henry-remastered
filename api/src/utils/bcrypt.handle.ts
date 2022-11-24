import { compare, hash } from "bcrypt"

export const encryptPassword = async (password:string):Promise<string> => {
    const passwordHass = await hash(password, 8)
    return passwordHass
}

export const verifyPassword = async (pasword:string, passwordHass:string):Promise<boolean> => {
    const isCorrect = await compare(pasword, passwordHass)
    return isCorrect
}