import { Router} from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { getUser } from "../controllers/userController.js";

const userRouter = Router()

userRouter.get("/profile", authMiddleware, getUser) 


export { userRouter }

