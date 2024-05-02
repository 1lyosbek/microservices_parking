import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateParkDto {
    @ApiProperty({
        type: String,
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        type: Number,
    })
    @IsNumber()
    @IsNotEmpty()
    capacity: number;

    @ApiProperty({
        type: Number,
    })
    @IsNumber()
    @IsNotEmpty()
    price: number;
}