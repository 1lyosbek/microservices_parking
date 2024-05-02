import * as dotenv from "dotenv";
import { IConfig } from "../types/type";

dotenv.config();

export const config: IConfig = {
  port: Number(process.env.PORT) || 7778,
  database: process.env.DATABASE,
  database_user: process.env.DATABASE_USER,
  database_password: process.env.DATABASE_PASSWORD,
  database_host: process.env.DATABASE_HOST,
  database_port: Number(process.env.DATABASE_PORT) || 5432
};