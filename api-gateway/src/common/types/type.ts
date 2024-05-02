import { RoleEnum } from "../enums/enum";

export interface IConfig {
    port: number;
    mic_port_park: number,
    mic_port_park_host: string,
    mic_port_user: number,
    mic_port_user_host: string,
}

export interface IUserData {
    phoneNumber: string;
    password: string;
    role: RoleEnum;
    balance: number;
    parkId: number;
}