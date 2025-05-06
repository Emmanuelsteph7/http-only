import { NextFunction, Request, Response } from "express";
declare const catchAsyncErrors: (func: any) => (req: Request, res: Response, next: NextFunction) => Promise<any>;
export default catchAsyncErrors;
