import winston from "winston";

const Logger = winston.createLogger({
    handleRejections: true,
    handleExceptions:true,
    transports: [
        new winston.transports.Console({}),
    ],
});

export default Logger;