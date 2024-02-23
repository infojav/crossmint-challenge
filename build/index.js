"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const metaverse_1 = require("./metaverse");
const createPolyannets_1 = __importDefault(require("./services/createPolyannets"));
// import { consoleFactory, loggerFactory } from "./utils";
// const api = CrossmintChallengeAPI.Instance;
// api.getGoal().then((response) => {
//     console.log(response);
// });
// const r = crossPositions(11, 2);
(0, createPolyannets_1.default)(new metaverse_1.Metaverse2d(), 11, 2);
// logger.debug(r);
