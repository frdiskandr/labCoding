import winston from "winston";

const Logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    handleExceptions: true,
    handleRejections: true,
    transports: [new winston.transports.Console({})],
});

export default Logger;
