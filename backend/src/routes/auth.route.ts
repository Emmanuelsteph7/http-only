import express from "express";
import { Path } from "../navigations/routes";
import {
  loginController,
  logoutController,
} from "../controllers/auth.controller";

const authRouter = express.Router();

authRouter.route(Path.Login).post(loginController);
authRouter.route(Path.Logout).post(logoutController);

export default authRouter;
