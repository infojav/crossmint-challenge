"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const metaverse_1 = require("./metaverse");
const createPolyanets_1 = __importDefault(require("./services/createPolyanets"));
const crossPositions_1 = __importDefault(require("./services/crossPositions"));
const utils_1 = require("./utils");
// const api = MegaverseCreator.Instance;
// api.getGoal().then((response: any) => {
//     console.log(response);
// });
const r = (0, crossPositions_1.default)(11, 2);
(0, createPolyanets_1.default)(new metaverse_1.Metaverse2d(), 11, 2);
console.log(r);
utils_1.logger.debug(r);
