import { IResponseDefaultProps } from "@/interfaces/Response.interfaces";

interface IUserBase {
    name:string;
    lastname:string;
    email:string;
}

export interface IUserRegister extends IUserBase{
    password:string;
}

export interface IUserLogin {
    email:string;
    password:string;
}
export interface IUserResponse extends IUserBase, IResponseDefaultProps{
    token:string;
}

export interface IUserTokenPayload extends IUserBase{
    id:number;
}



