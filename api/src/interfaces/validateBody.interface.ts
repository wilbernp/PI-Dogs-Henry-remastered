export interface RefineObject {
    message?:string;
    path?: (string | number)[];
}

export interface RefineCb<SchemaType> {
    (sch:SchemaType):boolean
}

export interface RefineOptions<SchemaType> {
    refineCb:RefineCb<SchemaType>;
    refineObject:RefineObject;
}