require("dotenv").config({
    path: `config/.env.${process.env.NODE_EMV || "development"}`,
});

export const env = {
    app: {
        port: parseInt(process.env.PORT) || 3000,
        enviroment: process.env.NODE_ENV || "development",
    },
    database: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT) || 3306,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        name: process.env.DATABASE_NAME,
        synchronize: process.env.TYPEORM_SYCHRONIZE === "true",
        logging: process.env.TYPEORM_LOGGING === "true",
    },
    auth: {
        jwtAccessSecret: process.env.JWT_SECRET_ACCESS,
        jwtRefreshSecret: process.env.JWT_SECRET_REFRESH,
    },
};
