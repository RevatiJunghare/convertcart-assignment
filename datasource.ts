import { DataSource } from "typeorm";
import { DishesEntity } from "./entities/dishes.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: Number(process.env.PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [DishesEntity],
  synchronize: true,
});
