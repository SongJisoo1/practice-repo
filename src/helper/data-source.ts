import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { env } from "./env";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: env.database.host,
    port: env.database.port,
    username: env.database.username,
    password: env.database.password,
    database: env.database.name,
    synchronize: env.database.synchronize,
    logging: env.database.logging,
    entities: [__dirname + "/../entities/*.entity{.ts,.js}"],
    namingStrategy: new SnakeNamingStrategy(),
});
