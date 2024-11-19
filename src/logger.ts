import winston from 'winston';

const logger = winston.createLogger({
    level: "debug",
    defaultMeta: {
        service: 'auth-service', 
    },
    transports: [
        new winston.transports.Console({
            level: 'debug',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
        }),
        new winston.transports.File({
            dirname: 'logs',
            filename: 'app.log',
            level: 'debug',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
        }),
    ],
});

export default logger;
