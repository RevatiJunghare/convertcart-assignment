import { DataSource } from "typeorm";
import { DishesEntity } from "./entities/dishes.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "convertcart",
  entities: [DishesEntity],
  synchronize: true,
});
