import "reflect-metadata";
import { createConnection } from "typeorm";
import { Student } from "../entity/Student";

export const connection = createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "lewin",
  password: "",
  database: "school",
  entities: [Student],
  migrations: ["migration/*.ts"],
  cli: {
    migrationsDir: "migration",
  },
  synchronize: true,
  logging: true,
});
