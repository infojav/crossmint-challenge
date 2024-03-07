import { Logger } from "./types";

export const consoleFactory = (logger: Logger) => () => {
    console.log = (message) => logger.info.call(logger, { message });
    console.info = (message) => logger.info.call(logger, { message });
    console.warn = (message) => logger.warning.call(logger, { message });
    console.error = (message) => logger.error.call(logger, { message });
    console.debug = (message) => logger.debug.call(logger, { message });
};
