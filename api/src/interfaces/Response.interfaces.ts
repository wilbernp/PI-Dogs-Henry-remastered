interface IError {
    message:string;
}

export interface IResponse<T> {
    status:number;
    data:T | T[];
    error:IError | null;
}

export interface IResponseDefaultProps {
    id:number;
    createdAt:Date;
    updatedAt:Date;
}