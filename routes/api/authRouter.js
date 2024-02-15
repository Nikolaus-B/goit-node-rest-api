import express from "express";
import validateBody from "../../midlewares/validateBody.js";
import { shemas } from "../../models/user.js";
import authControllers from "../../controllers/authControllers.js";
import authenticate from "../../midlewares/authenticate.js";
import upload from "../../midlewares/upload.js";
const {
  register,
  login,
  current,
  logout,
  updateAvatar,
  verifyEmail,
  resentVerifyEmail,
} = authControllers;

const authRouter = express.Router();

authRouter.post("/register", validateBody(shemas.registerSchema), register);

authRouter.get("/verify/:verificationToken", verifyEmail);

authRouter.post(
  "/verify",
  validateBody(shemas.verifySchema),
  resentVerifyEmail
);

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
