"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generalConfig = void 0;
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const corsOptions_1 = require("./corsOptions");
const cors_1 = __importDefault(require("cors"));
const logs_1 = __importDefault(require("../library/logs"));
const generalConfig = (app) => {
    app.use(express_1.default.json({ limit: "50mb" })); // Body parser
    app.use((0, cookie_parser_1.default)()); // Cookie parser
    app.use((0, cors_1.default)(corsOptions_1.corsOptions)); // Cors
    app.use((req, res, next) => {
        /** Log every request */
        logs_1.default.info(`Incomming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
        res.on("finish", () => {
            /** Log every response */
            logs_1.default.info(`Outgoing -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`);
        });
        next();
    });
};
exports.generalConfig = generalConfig;
