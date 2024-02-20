"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crossPositions_1 = __importDefault(require("./services/crossPositions"));
// const api = CrossmintChallengeAPI.Instance;
// api.getGoal().then((response) => {
//     console.log(response);
// });
const r = (0, crossPositions_1.default)(11, 2);
console.log(r);
