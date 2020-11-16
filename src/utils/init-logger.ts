import { createLogger, Logger, transports, format } from 'winston';

let logger: Logger | null = null;

export const initLogger = () => {
    if (logger === null) {
        logger = createLogger({
            transports: [new transports.Console()],
            format: format.combine(format.timestamp(), format.json())
        });
    }

    return logger;
};
