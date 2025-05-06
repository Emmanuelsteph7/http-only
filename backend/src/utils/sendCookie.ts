import { Response } from "express";
import {
  BACKEND_ORIGIN,
  DURATION_7_DAYS,
  NODE_ENV,
  TOKEN_COOKIE_KEY,
} from "../constants";
import { removeProtocol } from "./removeProtocol";

export const sendCookie = (
  res: Response,
  token: string,
  maxAge = DURATION_7_DAYS
) => {
  const isDevelopment = NODE_ENV === "development";
  const formattedDomain = isDevelopment
    ? "localhost"
    : removeProtocol(BACKEND_ORIGIN);

  console.log({ isDevelopment, formattedDomain, NODE_ENV });
  console.log({
    maxAge,
    httpOnly: true,
    sameSite: "lax",
    secure: !isDevelopment,
    domain: formattedDomain,
    path: "/",
    token,
    TOKEN_COOKIE_KEY,
  });

  console.log("sending cookie");

  res.cookie(TOKEN_COOKIE_KEY, token, {
    maxAge,
    httpOnly: true,
    sameSite: "lax",
    secure: !isDevelopment,
    domain: formattedDomain,
    path: "/",
  });
  console.log("cookie sent");
};
