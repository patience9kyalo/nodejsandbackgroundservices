export interface User{
    Id:string,
    Name:string,
    Email:string,
    Password:string,
    IsDelete:number,
    IsEmailSent:number,
}

export interface Payload{
    Sub:string,
    Name:string
}