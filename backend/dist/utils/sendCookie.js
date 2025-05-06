"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendCookie = void 0;
const constants_1 = require("../constants");
const removeProtocol_1 = require("./removeProtocol");
const sendCookie = (res, token, maxAge = constants_1.DURATION_7_DAYS) => {
    const isDevelopment = constants_1.NODE_ENV === "development";
    const formattedDomain = isDevelopment
        ? "localhost"
        : (0, removeProtocol_1.removeProtocol)(constants_1.BACKEND_ORIGIN);
    console.log({ isDevelopment, formattedDomain, NODE_ENV: constants_1.NODE_ENV });
    console.log({
        maxAge,
        httpOnly: true,
        sameSite: "lax",
        secure: !isDevelopment,
        domain: formattedDomain,
        path: "/",
        token,
        TOKEN_COOKIE_KEY: constants_1.TOKEN_COOKIE_KEY,
    });
    console.log("sending cookie");
    res.cookie(constants_1.TOKEN_COOKIE_KEY, token, {
        maxAge,
        httpOnly: true,
        sameSite: "lax",
        secure: !isDevelopment,
        domain: formattedDomain,
        path: "/",
    });
    console.log("cookie sent");
};
exports.sendCookie = sendCookie;
