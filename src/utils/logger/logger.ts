import { LogLevel, LogLevelValue, Logger, OutputLogger } from "./types";

const getLogLevelValue = (logLevel: LogLevel) => LogLevelValue[logLevel];
const getUTCTimestamp = () => new Date().toISOString();

// logger Factory
export const getLogger = (outputLogger: OutputLogger, logLevel: LogLevel = "info"): Logger => ({
    debug(logInfo) {
        getLogLevelValue("debug") >= getLogLevelValue(logLevel) &&
            outputLogger.log("debug", {
                logInfo,
                timestamp: getUTCTimestamp(),
            });
    },
    warning(logInfo) {
        getLogLevelValue("warn") >= getLogLevelValue(logLevel) &&
            outputLogger.log("warn", {
                logInfo,
                timestamp: getUTCTimestamp(),
            });
    },
    info(logInfo) {
        getLogLevelValue("info") >= getLogLevelValue(logLevel) &&
            outputLogger.log("info", {
                logInfo,
                timestamp: getUTCTimestamp(),
            });
    },
    error(error) {
        getLogLevelValue("error") >= getLogLevelValue(logLevel) &&
            outputLogger.log("error", {
                logInfo: error,
                timestamp: getUTCTimestamp(),
            });
    },
});
