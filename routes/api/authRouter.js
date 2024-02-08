import express from "express";
import validateBody from "../../midlewares/validateBody.js";
import { shemas } from "../../models/user.js";
import authControllers from "../../controllers/authControllers.js";
import authenticate from "../../midlewares/authenticate.js";
import upload from "../../midlewares/upload.js";
const { register, login, current, logout, updateAvatar } = authControllers;

const authRouter = express.Router();

authRouter.post("/register", validateBody(shemas.registerSchema), register);

authRouter.post("/login", validateBody(shemas.loginSchema), login);

authRouter.get("/current", authenticate, current);

authRouter.post("/logout", authenticate, logout);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  updateAvatar
);

export default authRouter;
