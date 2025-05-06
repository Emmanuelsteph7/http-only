"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const chalkInstance = () => __awaiter(void 0, void 0, void 0, function* () { return (yield import("chalk")).default; });
class Logging {
}
_a = Logging;
Logging.info = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const chalk = yield chalkInstance();
    console.log(chalk.blue(`[${new Date().toLocaleString()}] [INFO]`), typeof args === "string" ? chalk.blueBright(args) : args);
});
Logging.warn = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const chalk = yield chalkInstance();
    console.log(chalk.yellow(`[${new Date().toLocaleString()}] [WARN]`), typeof args === "string" ? chalk.yellowBright(args) : args);
});
Logging.error = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const chalk = yield chalkInstance();
    console.log(chalk.red(`[${new Date().toLocaleString()}] [ERROR]`), typeof args === "string" ? chalk.redBright(args) : args);
});
exports.default = Logging;
