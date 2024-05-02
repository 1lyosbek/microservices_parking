import { RoleEnum } from "../../../common/enums/enum";

export class CreateUserDto {
    phoneNumber: string;
    password: string;
    role: RoleEnum;
    balance: number;
    parkId:number;
}
export interface ILoginDto {
    phoneNumber: string;
    password: string;
}
