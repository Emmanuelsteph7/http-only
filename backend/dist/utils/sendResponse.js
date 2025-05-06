"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = ({ message, res, status = 200, data, success = true, }) => {
    res.status(status).json({
        success,
        message,
        data,
    });
};
exports.sendResponse = sendResponse;
