"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constants_1 = require("../constants");
const generateToken = (id, expiresIn = "7d") => {
    return jsonwebtoken_1.default.sign({
        id,
    }, constants_1.JWT_SECRET, {
        expiresIn: expiresIn,
    });
};
exports.generateToken = generateToken;
