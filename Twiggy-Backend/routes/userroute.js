import express from "express";
import { loginUser, registerUser } from "../controllers/usercontroller.js"; // Ensure the path and extension are correct

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

export default userRouter;
