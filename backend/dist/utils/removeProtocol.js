"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProtocol = removeProtocol;
function removeProtocol(url) {
    const withoutProtocol = url.replace(/^(https?:\/\/)/, "");
    // If it starts with localhost:..., remove the port
    if (withoutProtocol.startsWith("localhost:")) {
        return "localhost";
    }
    return withoutProtocol;
}
