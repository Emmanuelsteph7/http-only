"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DURATION_20_MIN_IN_SECONDS = exports.DURATION_5_MIN_IN_SECONDS = exports.DURATION_7_DAYS = exports.DURATION_1_HR = exports.DURATION_10_MIN = exports.DURATION_5_MIN = exports.DURATION_4_MIN = exports.DURATION_1_MIN = exports.DURATION_10_SEC = exports.DURATION_5_SEC = exports.DURATION_2_SEC = exports.TOKEN_COOKIE_KEY = exports.JWT_SECRET = exports.NODE_ENV = exports.PORT = exports.BACKEND_ORIGIN = exports.WEBSITE_ORIGIN = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.WEBSITE_ORIGIN = process.env.WEBSITE_ORIGIN;
exports.BACKEND_ORIGIN = process.env.BACKEND_ORIGIN;
exports.PORT = process.env.PORT;
/** the value in the env should be 'development' or 'production' */
exports.NODE_ENV = process.env.NODE_ENV;
exports.JWT_SECRET = process.env.JWT_SECRET || "";
exports.TOKEN_COOKIE_KEY = "auth_token";
/** Time durations in milliseconds */
exports.DURATION_2_SEC = 2 * 1000;
exports.DURATION_5_SEC = 5 * 1000;
exports.DURATION_10_SEC = 10 * 1000;
exports.DURATION_1_MIN = 60 * 1000;
exports.DURATION_4_MIN = 4 * 60 * 1000;
exports.DURATION_5_MIN = 5 * 60 * 1000;
exports.DURATION_10_MIN = 10 * 60 * 1000;
exports.DURATION_1_HR = 60 * 60 * 1000;
exports.DURATION_7_DAYS = 7 * 24 * 60 * 60 * 1000;
exports.DURATION_5_MIN_IN_SECONDS = 5 * 60;
exports.DURATION_20_MIN_IN_SECONDS = 20 * 60;
