import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, IsNotEmpty, IsOptional } from 'class-validator';

export class UsersListDto {
    @ApiProperty({
        name: 'id',
        description: 'This id create by database automaticly. Default value format uuid/string',
        required: false,
        type: 'string',
    })
    @IsNotEmpty()
    id: string;

    @ApiProperty({
        name: 'name',
        description: "This value need to be set by the user. Can't be empty",
        required: true,
        type: 'string',
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-zA-ZА-Яа-яёЁЇїІіЄєҐґ ]+$/)
    name: string;

    @ApiProperty({
        name: 'rank',
        description: "This optional value generate by front-end or cteate automaticly by the back-end. Can't be empty",
        required: true,
        type: 'number',
    })
    @IsString()
    @IsOptional()
    @Matches(/[0-9]/)
    rank: number;
}

export class CreateUserDto {
    @ApiProperty({
        name: 'name',
        description: "This value need to be set by the user. Can't be empty",
        required: true,
        type: 'string',
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-zA-ZА-Яа-яёЁЇїІіЄєҐґ ]+$/)
    name: string;

    @ApiProperty({
        name: 'rank',
        description: "This optional value generate by front-end or cteate automaticly by the back-end. Can't be empty",
        required: false,
        type: 'number',
    })
    @IsString()
    @IsOptional()
    @Matches(/[0-9]/)
    rank?: number;
}
