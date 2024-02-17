"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const http_1 = __importDefault(require("http"));
const constants_1 = require("./config/constants");
const port = process.env.SERVER_PORT || constants_1.SERVER_PORT;
const server = http_1.default.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!\n");
});
exports.server = server;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
