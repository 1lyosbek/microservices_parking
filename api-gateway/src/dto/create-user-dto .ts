import { RoleEnum } from 'src/common/enums/enum';
import { IsString, IsNotEmpty, IsNumber, IsEnum, IsOptional, Min, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty({
        type: String,
        example: "+998 90 123 4567"
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
        type: String,
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
    @IsOptional()
    parkId: number;
}
