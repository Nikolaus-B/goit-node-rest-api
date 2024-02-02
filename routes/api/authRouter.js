import express from "express";
import validateBody from "../../midlewares/validateBody.js";
import { shemas } from "../../models/user.js";
import authControllers from "../../controllers/authControllers.js";
import authenticate from "../../midlewares/authenticate.js";
const { register, login, current, logout } = authControllers;

const authRouter = express.Router();

authRouter.post("/register", validateBody(shemas.registerSchema), register);

authRouter.post("/login", validateBody(shemas.loginSchema), login);

authRouter.get("/current", authenticate, current);

authRouter.post("/logout", authenticate, logout);

export default authRouter;
