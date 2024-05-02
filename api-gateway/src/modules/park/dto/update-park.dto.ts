import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateParkDto {
    @ApiPropertyOptional({
        type: String
    })
    @IsString()
    @IsOptional()
    name: string;

    @ApiPropertyOptional({
        type: Number
    })
    @IsInt()
    @IsOptional()
    capacity: number;

    @ApiPropertyOptional({
        type: Number
    })
    @IsInt()
    @IsOptional()
    price: number;

    @ApiPropertyOptional({
        type: Number
    })
    @IsInt()
    @IsOptional()
    userId: number;
}
