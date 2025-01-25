import { PrismaClient } from "@prisma/client";
import Logger from "./loging.js";

export const prisma = new PrismaClient({
    log: [
        {
          emit: 'event',
          level: 'query',
        },
        {
          emit: 'event',
          level: 'error',
        },
        {
          emit: 'event',
          level: 'info',
        },
        {
          emit: 'event',
          level: 'warn',
        },
      ],
})

prisma.$on('error', (e) => {
    Logger.error(e);
})

prisma.$on('warn', (e) => {
    Logger.warn(e);
})

prisma.$on('info', (e) => {
    Logger.info(e);
})

prisma.$on('query', (e) => {
    Logger.info(e);
})
