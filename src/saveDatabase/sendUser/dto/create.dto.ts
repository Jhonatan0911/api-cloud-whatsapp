import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, IsDate } from 'class-validator';

export class Dto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    from: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    message: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    json: string;

    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    date: Date;

    @ApiProperty()
    @IsBoolean()
    @IsNotEmpty()
    status: boolean;
}