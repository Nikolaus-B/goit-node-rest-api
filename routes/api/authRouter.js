import express from "express";
import validateBody from "../../midlewares/validateBody.js";
import { shemas } from "../../models/user.js";
import authControllers from "../../controllers/authControllers.js";
const { register } = authControllers;

const authRouter = express.Router();

authRouter.post("/register", validateBody(shemas.registerSchema, register));

export default authRouter;
