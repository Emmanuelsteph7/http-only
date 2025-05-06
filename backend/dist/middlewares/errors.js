"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
// Error middleware
// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars, @typescript-eslint/no-unused-vars
const errorMiddleware = (err, req, res, next) => {
    var _a, _b;
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    if (((_a = process.env.NODE_ENV) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "production") {
        let error = Object.assign({}, err);
        // Wrong Mongoose Object ID Error - CastError
        // Cast Error occurs when req.params.id length is either greater or lesser than the id in the database
        if (err.name === "CastError") {
            const msg = `Resource not found. Invalid ${err.path}`;
            error = new errorHandler_1.default(msg, 400);
        }
        // Handle mongoose validation error - ValidationError
        // Validation error occurs when there is a missing required field in the req.body
        if ((err === null || err === void 0 ? void 0 : err.name) === "ValidationError") {
            // eslint-disable-next-line prefer-destructuring
            const errors = err.errors;
            const message = [];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const displayedMsgs = [];
            // eslint-disable-next-line no-restricted-syntax, guard-for-in
            for (const msg in errors) {
                message.push(errors[msg]);
            }
            if (message) {
                message.forEach((obj) => {
                    displayedMsgs.push(obj.message);
                });
            }
            error = new errorHandler_1.default(displayedMsgs, 400);
        }
        // This kind of error occurs when there is a duplicate
        // for instance, during registration, when the same username or email is already registered
        // the error code is usually 11000
        // Object.keys(err.keyValue) returns the name of the duplicate value eg, email etc
        if (err.code === 11000) {
            const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
            error = new errorHandler_1.default(message, 400);
        }
        // Handling wrong JWT error
        if (err.name === "JsonWebTokenError") {
            const message = "JSON Web Token is invalid. Try Again!!!";
            error = new errorHandler_1.default(message, 400);
        }
        // Handling Expired JWT error
        if (err.name === "TokenExpiredError") {
            const message = "JSON Web Token is expired. Try Again!!!";
            error = new errorHandler_1.default(message, 400);
        }
        res.status(error.statusCode).json({
            success: false,
            errMessage: error.message || err.message || "Internal Server Error",
        });
    }
    if (((_b = process.env.NODE_ENV) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === "development") {
        res.status(err.statusCode).json({
            success: false,
            error: err,
            errMessage: err.message,
            stack: err.stack,
        });
    }
};
exports.default = errorMiddleware;
