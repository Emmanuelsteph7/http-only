"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Error Handler Class
class ErrorHandler extends Error {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = ErrorHandler;
