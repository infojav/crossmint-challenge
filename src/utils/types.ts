export type LogLevel = "debug" | "info" | "warn" | "error";
export const LogLevelValue: { [key: string]: number } = {
    debug: 10,
    info: 20,
    warn: 30,
    error: 40,
};

export type LogInfo = {
    [key: string]: any;
};

export type LogFunction = (logInfo: LogInfo) => void;

export type OutputLogFunction = {
    (level: string, logInfo: LogInfo): void;
};

export interface OutputLogger {
    log: OutputLogFunction;
}

export type Logger = {
    debug: LogFunction;
    warning: LogFunction;
    info: LogFunction;
    error: LogFunction;
};
