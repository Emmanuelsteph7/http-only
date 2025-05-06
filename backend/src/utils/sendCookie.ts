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

  /**
     * secure: true
        → The cookie will only be sent over HTTPS.
        → Required if you use SameSite: 'None'.

      SameSite has three valid options:
        Strict: Only send the cookie for same-site requests. This won't work since the frontend and backend are on different domains(sites).
        Lax: Allow cookie on top-level navigations and GET requests. This won't work because we will have other methids like POST, PUT etc.
        None: Allow the cookie on all cross-site requests — but only if secure: true. This will work for production in our instance.
     */
  res.cookie(TOKEN_COOKIE_KEY, token, {
    maxAge,
    httpOnly: true,
    sameSite: isDevelopment ? "lax" : "none",
    secure: !isDevelopment,
    domain: formattedDomain,
    path: "/",
  });
};
