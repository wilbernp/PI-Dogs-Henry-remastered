import { IResponse } from "../interfaces/Response.interface"

export const handleError = (message:string, status:number) =>{
    const error: IResponse<null> = {
        status,
        data:null,
        error:{message}
    }
    return error
}

export const handleResponse = <T>(data:T, status:number):IResponse<T> => {
    const response:IResponse<T> = {
        status,
        data,
        error:null
    }

    return response
}