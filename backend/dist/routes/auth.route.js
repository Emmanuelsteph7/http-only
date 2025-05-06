"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("../navigations/routes");
const auth_controller_1 = require("../controllers/auth.controller");
const authRouter = express_1.default.Router();
authRouter.route(routes_1.Path.Login).post(auth_controller_1.loginController);
authRouter.route(routes_1.Path.Logout).post(auth_controller_1.logoutController);
exports.default = authRouter;
