import { DefaultDataInterface } from "./defaultData.interface";


export interface LoginInterface {
    email:string;
    password:string;
}

export interface TokenPayloadInterface extends DefaultDataInterface{
  name: string;
  lastname: string;
  email: string;
}