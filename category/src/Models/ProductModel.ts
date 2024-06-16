import {Request} from "express"

export interface Product{
    id: string,
    prodname: string,
    proddescription: string,
    prodprice: number,
    catid:string

}

export interface addProduct{
    prodname: string,
    proddescription: string,
    prodprice: number,
    catid:string

}

export interface ProductRequest extends Request {
    body:addProduct
}


