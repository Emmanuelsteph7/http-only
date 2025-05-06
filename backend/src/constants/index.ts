import { config } from "dotenv";
config();

export const WEBSITE_ORIGIN = process.env.WEBSITE_ORIGIN || "";
export const BACKEND_ORIGIN = process.env.BACKEND_ORIGIN || "";
export const PORT = process.env.PORT || "";

/** the value in the env should be 'development' or 'production' */
export const NODE_ENV = process.env.NODE_ENV;

export const JWT_SECRET = process.env.JWT_SECRET || "";
export const TOKEN_COOKIE_KEY = "auth_token";

/** Time durations in milliseconds */
export const DURATION_2_SEC = 2 * 1000;
export const DURATION_5_SEC = 5 * 1000;
export const DURATION_10_SEC = 10 * 1000;
export const DURATION_1_MIN = 60 * 1000;
export const DURATION_4_MIN = 4 * 60 * 1000;
export const DURATION_5_MIN = 5 * 60 * 1000;
export const DURATION_10_MIN = 10 * 60 * 1000;
export const DURATION_1_HR = 60 * 60 * 1000;
export const DURATION_7_DAYS = 7 * 24 * 60 * 60 * 1000;

export const DURATION_5_MIN_IN_SECONDS = 5 * 60;
export const DURATION_20_MIN_IN_SECONDS = 20 * 60;
