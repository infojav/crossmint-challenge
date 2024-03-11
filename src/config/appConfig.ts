import dotenv from "dotenv";

import { __CONSTANTS__ } from "./constants";

dotenv.config();

export const appConfig = {
    ...__CONSTANTS__,
    LOG_LEVEL: process.env.LOG_LEVEL || "error",
    CANDIDATE_ID: process.env.CANDIDATE_ID || "",
    REQ_X_SECOND: Number(process.env.REQ_X_SECOND) || 1,
    CROSSMINT_CHALLENGE_API: process.env.CROSSMINT_CHALLENGE_API || "https://challenge.crossmint.io/api/",
    SERVER_PORT: process.env.SERVER_PORT || 3000,
};
