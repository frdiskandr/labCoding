import winston from "winston";

const Logger = winston.createLogger({
    level: "info",
    handleExceptions: true,
    handleRejections: true,
    format: winston.format.json(),
    transports: [
        new winston.transports.Console()
    ],
})

export default Logger