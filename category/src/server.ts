import express, { json } from "express"
import categoryRouter from "./Routes/categoryRoutes"
import productRouter from "./Routes/productRoutes"
import authRoutes from "./Routes/authRoutes"

const app = express()

//middleware
app.use(json())
app.use("/categories", categoryRouter)
app.use("/products", productRouter)
app.use("/users", authRoutes)

//port
app.listen(4000,()=>{
    console.log('Server running...')
})