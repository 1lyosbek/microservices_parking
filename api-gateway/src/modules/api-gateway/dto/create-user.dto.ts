import { ApiProperty } from '@nestjs/swagger';
import { RoleEnum } from '../../../common/enums/enum';
import { IsString, IsNotEmpty, IsNumber, IsEnum, IsOptional, Min, IsInt } from 'class-validator';

export class LoginDto {
    @ApiProperty({
        type: String,
        example: "+998901234567"
    })
    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @ApiProperty({
        type: String,
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}

export class RegisterDto {
    @ApiProperty({
        type: String,
    })
    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @ApiProperty({
        type: String,
    })
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({
       enum: RoleEnum
    })
    @IsEnum(RoleEnum)
    @IsNotEmpty()
    role: RoleEnum;

    @ApiProperty({
        type: Number,
    })
    @IsNumber()
    @Min(0)
    @IsOptional()
    balance: number;

    @ApiProperty({
        type: Number,
    })
    @IsInt()
    @Min(0)
    @IsOptional()
    parkId: number;
}
