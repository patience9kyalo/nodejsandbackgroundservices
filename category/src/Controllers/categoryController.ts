import {Request, Response} from "express"
import { Category, CategoryRequest } from "../Models/CategoryModel";
import {v4 as uid} from "uuid"
import  mssql  from "mssql";
import { sqlConfig } from "../config";
import { DbHelper } from "../DatabaseHelpers";

let dbInstance= new DbHelper()
export const addCategory=async (req:Request,res:Response)=>{
    try {
        

        const {catname,catdescription}=req.body
        const catid=uid()
        await dbInstance.exec('addCategory', {catid:catid, catname,catdescription})
        return res.status(201).send('<h1> Category Added</h1>')
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getCategories=async (req:Request,res:Response)=>{
    try {
        const categories =(await dbInstance.exec('getCategories', {})).recordset as Category[]
        return res.status(200).json(categories)
       
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}