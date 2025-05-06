import { Response } from "express";
interface ISendResponseOptions {
    res: Response;
    status?: number;
    message: string;
    data?: any;
    success?: boolean;
}
export declare const sendResponse: ({ message, res, status, data, success, }: ISendResponseOptions) => void;
export {};
