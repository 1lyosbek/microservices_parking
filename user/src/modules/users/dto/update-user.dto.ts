import { RoleEnum } from "../../../common/enums/enum";

export interface IUserUpdate {
    phoneNumber: string;
    password: string;
    role: RoleEnum;
    balance: number;
    parkId: number;
}

export class UpdateDto {
    id: number;
    data: IUserUpdate;
}
