import { sign} from "jsonwebtoken"
import { IUserResponse, IUserTokenPayload } from "../interfaces/User.interfaces"


const {SECRET} = process.env
export const generateToken = (payload:IUserTokenPayload):string =>{
    const {id, name, lastname, email} = payload
    const token = sign({id,name, lastname, email}, SECRET)
    return token
}
