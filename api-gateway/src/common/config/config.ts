import * as dotenv from "dotenv";
import { IConfig } from "../types/type";

dotenv.config();

export const config: IConfig = {
  port: Number(process.env.PORT) || 7778,
  mic_port_park: Number(process.env.MIC_PORT_PARK) || 7777,
  mic_port_park_host: process.env.MIC_PORT_PARK_HOST,
  mic_port_user: Number(process.env.MIC_PORT_USER) || 7778,
  mic_port_user_host: process.env.MIC_PORT_PARK_HOST,
};