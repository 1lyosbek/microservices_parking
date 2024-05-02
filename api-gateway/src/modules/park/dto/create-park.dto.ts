import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateParkDto {
    @ApiProperty({
        type: String
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        type: Number
    })
    @IsInt()
    @IsNotEmpty()
    capacity: number;

    @ApiProperty({
        type: Number
    })
    @IsInt()
    @IsNotEmpty()
    price: number;
    
    @ApiProperty({
        type: Number
    })
    @IsInt()
    @IsNotEmpty()
    userId: number;
}
