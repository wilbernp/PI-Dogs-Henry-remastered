import { IResponseDefaultProps } from "@/interfaces/Response.interfaces";

export interface IDogCreate {
    breedsId: number[];
    temperamentId:number;
    // userId:number
    name:string;
    min_life_span:number;
    max_life_span:number;
    min_height:number;
    max_height:number;
    min_weight:number;
    max_weight:number;
}

export interface IDogResponse extends IDogCreate, IResponseDefaultProps {

}