import { appConfig } from "../../config";
import { getLogger } from "./logger";
import { LogLevel } from "./types";

export const logger = getLogger(console, appConfig?.LOG_LEVEL as LogLevel);
