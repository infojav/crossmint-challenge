"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const metaverse_1 = require("./metaverse");
const compareMetaverse_1 = __importDefault(require("./services/compareMetaverse"));
const m = new metaverse_1.Metaverse2d();
// replicateMap(m);
(0, compareMetaverse_1.default)(m);
// resetMap(m);
