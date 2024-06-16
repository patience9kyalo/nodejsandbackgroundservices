import { Request, Response,NextFunction } from "express";
import { Payload } from "../Models/authModels";
import path from 'path'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'


export interface ExtendedRequest1 extends Request{
    info?:Payload
}

export function verifyToken(req:ExtendedRequest1, res:Response, next:NextFunction){
    try{
        const token = req.headers['token'] as string

        if(!token){
            return res.status(401).json({message:'Forbidden !!'})
        }
        
        const decodedData = jwt.verify(token,process.env.SECRET as string) as Payload
        req.info = decodedData
    }catch(error){
        return res.status(500).json(error)
    }
    next()
}