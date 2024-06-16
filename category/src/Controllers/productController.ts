import { Request, Response } from 'express'
import { v4 as uid } from "uuid"
import mssql from 'mssql'
import { sqlConfig } from '../config'
import { Product, ProductRequest } from '../Models/ProductModel'
import { DbHelper } from '../DatabaseHelpers'

const dbInstance = new DbHelper()
export const addProduct = async(req:ProductRequest, res: Response)=> {
    try {

        const id = uid()
        const { prodname, proddescription, prodprice, catid } = req.body
        await dbInstance.exec("addProduct",{id:id, prodname, proddescription, prodprice,catid})

        return res.status(201).json({ message: "Product added successfully" })

    } catch (error) {
        return res.status(500).json(error)
    }
}


export async function getProducts(req: Request, res: Response) {
    try {

        const products = (await dbInstance.exec('getProducts',{})).recordset as Product[]
        return res.status(200).json(products)


    } catch (error) {
        return res.status(500).json(error)
    }
}

export async function getProduct(req: Request<{ id: string }>, res: Response) {
    try {

        const product = (await dbInstance.exec('getProduct', {id:req.params.id})).recordset[0] as Product
        if(product && product.id){
            return res.status(200).json(product)
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}

export async function getcategoryProduct(req: Request<{ id: string }>, res: Response) {
    try {

        const categoryproduct = (await dbInstance.exec('getcategoryProduct', {id:req.params.id})).recordset[0] as Product
        if(getProducts.length > 0){
            return res.status(200).json(categoryproduct)
        }
        let pool = await mssql.connect(sqlConfig)

    } catch (error) {
        return res.status(500).json(error)
    }
}

export async function updateProduct(req: Request<{ id: string }>, res: Response) {
    try {

        const product = (await dbInstance.exec('getProduct', {id:req.params.id})).recordset[0] as Product

        if(product && product.id){

        if(product && product.id){
        const { prodname, proddescription, prodprice, catid } = req.body

        if(product && product.id){
            await dbInstance.exec("updateProduct", {id:req.params.id, prodname, proddescription, prodprice, catid})
            return res.status(200).json({message:"Product updated"})
        }

        return res.status(200).json({message:"Product not found"})

    }
    }

    } catch (error) {
        return res.status(500).json(error)
    }
}

export async function deleteProduct(req: Request<{ id: string }>, res: Response) {
    try {
        const product = (await dbInstance.exec('getProduct', {id:req.params.id})).recordset[0] as Product

        if (product && product.id) {
            await dbInstance.exec('deleteProduct', {id:req.params.id})
            return res.status(200).json({ Message: "Product deleted successfully" })
        }
        return res.status(404).json({ message: "Product not found" })

    } catch (error) {
        return res.status(500).json(error)
    }
}