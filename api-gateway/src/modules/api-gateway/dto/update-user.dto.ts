import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsInt, IsOptional, IsString } from "class-validator";
import { RoleEnum } from "../../..//common/enums/enum";

export class UserUpdateDto {
    @ApiPropertyOptional({
        type: String,
        example: "+998901234567"
    })
    @IsString()
    @IsOptional()
    phoneNumber: string;

    @ApiPropertyOptional({
        type: String
    })
    @IsString()
    @IsOptional()
    password: string;

    @ApiPropertyOptional({
        enum: RoleEnum
    })
    @IsEnum(RoleEnum)
    @IsOptional()
    role: RoleEnum;
    @ApiPropertyOptional({
        type: Number
    })
    @IsInt()
    @IsOptional()
    balance: number;

    @ApiPropertyOptional({
        type: Number
    })
    @IsInt()
    @IsOptional()
    parkId: number;
}
