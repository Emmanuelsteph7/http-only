import { NextFunction, Response, Request } from "express";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import ErrorHandler from "../utils/errorHandler";
import { sendResponse } from "../utils/sendResponse";
import { sendCookie } from "../utils/sendCookie";
import { DURATION_5_MIN } from "../constants";

export const loginController = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      sendCookie(res, "token-string", DURATION_5_MIN);
      sendResponse({
        message: "Login successful",
        res,
        status: 200,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

export const logoutController = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      /** Passing 0 as max will make the max age to be like date.now and it will clear it */
      sendCookie(res, "token-string", 0);
      sendResponse({
        message: "Logout successful",
        res,
        status: 200,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);
