import { Router } from "express"
import { loginUser, registerUser } from "../Controllers/authControllers"

const authRoutes = Router()

authRoutes.post("/register", registerUser)
authRoutes.post("/login", loginUser)
export default authRoutes