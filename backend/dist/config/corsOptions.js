"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = exports.allowedOrigins = void 0;
const constants_1 = require("../constants");
exports.allowedOrigins = [constants_1.WEBSITE_ORIGIN];
exports.corsOptions = {
    origin: (origin, callback) => {
        if ((origin && exports.allowedOrigins.indexOf(origin) !== -1) || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};
