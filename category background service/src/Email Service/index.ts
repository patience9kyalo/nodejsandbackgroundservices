import mssql from 'mssql'
import ejs from 'ejs'
import { sqlConfig } from '../config'
import path from 'path'
import dotenv from 'dotenv'
import { sendEmail } from '../Helpers'
dotenv.config({path:path.resolve(__dirname, "../../.env")})


interface User{
    Id:string,
    Name:string,
    Email:string,
    Password:string,
    IsDelete:number,
    IsEmailSent:number,
}

export async function run(){
    try{
        let pool = await mssql.connect(sqlConfig)
        let users = await (await pool.request().query("SELECT * FROM users WHERE isEmailSent=0")).recordset as User[]
        users.forEach(user=>{
            ejs.renderFile("Templates/register.ejs", {name:user.Name}, async(error,data)=>{
                let messageOptions={
                    to:user.Email,
                    from:process.env.EMAIL,
                    subject:"Welcome to our store",
                    html:data
                }

                await sendEmail(messageOptions)
                await pool.request().query(`UPDATE users SET isEmailSent=1 WHERE Id='${user.Id}'`)
            })

        })
    }catch(error){

    }
}