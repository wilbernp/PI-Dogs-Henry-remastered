import {UserResponseInterface } from "@/interfaces/user.interface"
import { sign} from "jsonwebtoken"


const {SECRET} = process.env
export const generateToken = (payload:UserResponseInterface):string =>{
    const {id, name, lastname, email} = payload
    const token = sign({id,name, lastname, email}, SECRET)
    return token
}
