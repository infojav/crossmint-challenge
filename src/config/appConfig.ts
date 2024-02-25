import dotenv from "dotenv";

import { __CONSTANTS__ } from "./constants";

dotenv.config();

export const appConfig = {
    ...__CONSTANTS__,
    LOG_LEVEL: process.env.LOG_LEVEL || "info",
    CANDIDATE_ID: process.env.CANDIDATE_ID || "",
    REQ_X_SECOND: Number(process.env.REQ_X_SECOND) || 0.5,
};
