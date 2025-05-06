"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const errors_1 = __importDefault(require("./middlewares/errors"));
const logs_1 = __importDefault(require("./library/logs"));
const generalConfig_1 = require("./config/generalConfig");
const allRoutes_1 = require("./config/allRoutes");
const constants_1 = require("./constants");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
(0, generalConfig_1.generalConfig)(app);
// Routes
(0, allRoutes_1.allRoutes)(app);
// Middleware to handle errors
app.use(errors_1.default);
// Handle unknown routes
app.all("*", (req, res, next) => {
    const errMessage = `Route ${req.originalUrl} not found`;
    const err = new Error(errMessage);
    err.statusCode = 404;
    next(err);
});
/**
 * Create server
 */
app.listen(constants_1.PORT || 8000, () => {
    logs_1.default.info(`Server started on port ${constants_1.PORT}`);
});
