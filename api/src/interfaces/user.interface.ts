import { DefaultDataInterface } from "./defaultData.interface";

export interface UserInterface {
    name: string;
    lastname: string;
    email: string;
    password: string;
}

export interface UserResponseInterface extends DefaultDataInterface, UserInterface {}
