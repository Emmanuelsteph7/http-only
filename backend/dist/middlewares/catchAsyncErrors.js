"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const catchAsyncErrors = (func) => (req, res, next) => Promise.resolve(func(req, res, next)).catch(next);
exports.default = catchAsyncErrors;
