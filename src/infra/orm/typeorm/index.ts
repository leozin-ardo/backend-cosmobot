import { DataSource } from "typeorm";

export const MyDataSource = new DataSource({
    type: "postgres",
    database: "cosmobot",
    username: "postgres",
    password: "postgres",
    port: 5432,
    dropSchema: false,
    synchronize: false,
    logging: false,
    logger: "advanced-console",
    entities: ["src/infra/orm/typeorm/schemas/*entity.ts"],
    migrations: ["src/infra/orm/typeorm/migrations/*.ts"],
});
