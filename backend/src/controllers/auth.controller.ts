import { NextFunction, Response, Request } from "express";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import ErrorHandler from "../utils/errorHandler";
import { sendResponse } from "../utils/sendResponse";
import { sendCookie } from "../utils/sendCookie";
import { DURATION_5_MIN } from "../constants";

export const loginController = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("setting cookie");

      sendCookie(res, "token-string", DURATION_5_MIN);
      sendResponse({
        message: "Server successfully running",
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
      sendCookie(res, "token-string", 0);
      sendResponse({
        message: "Server successfully running",
        res,
        status: 200,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);
