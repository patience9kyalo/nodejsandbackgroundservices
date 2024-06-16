export interface Category {
    catid : string,
    catname: string,
    catdescription:string
}

export interface CategoryRequest extends Request {
    catname: string
    catdescription:string
}
