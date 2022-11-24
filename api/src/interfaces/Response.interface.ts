interface IError {
    message:string;
}

export interface IResponse<T> {
    status:number;
    data:T | T[];
    error:IError | null;
}