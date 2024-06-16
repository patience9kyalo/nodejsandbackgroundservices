import { Router } from "express";
import { addProduct, getProduct, getProducts, updateProduct, deleteProduct } from "../Controllers/productController";
import { verifyToken } from "../Middlewares";


const productRouter = Router()
productRouter.post("", addProduct)
productRouter.get("", verifyToken, getProducts)
productRouter.get("/:id", getProduct)
productRouter.put("/:id", updateProduct)
productRouter.delete("/:id", deleteProduct)


export default productRouter
