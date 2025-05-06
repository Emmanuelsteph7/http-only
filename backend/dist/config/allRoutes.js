"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allRoutes = void 0;
const auth_route_1 = __importDefault(require("../routes/auth.route"));
const routes_1 = require("../navigations/routes");
const allRoutes = (app) => {
    app.use(auth_route_1.default);
    app.get(routes_1.Path.Root, (req, res, next) => {
        res.status(200).json({
            success: true,
            message: "Hurray!!!",
        });
    });
};
exports.allRoutes = allRoutes;
