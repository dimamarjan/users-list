import { Body, Param, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UsersListDto } from './dto/users.dto';
import { UsersService } from './users.service';

@ApiTags('"users" requests methods')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async getUsersList() {
        return this.usersService.getUsersList();
    }

    @Post('create')
    @ApiBody({ type: CreateUserDto })
    async createUser(@Body() user: CreateUserDto) {
        return this.usersService.createUser(user);
    }

    @Patch('update')
    @ApiBody({ type: [UsersListDto] })
    async updateUserList(@Body() usersList: UsersListDto[]) {
        return this.usersService.updateUserList(usersList);
    }

    @Delete('delete/:id')
    async deleteUser(@Param('id') id: string) {
        return this.usersService.deleteUser(id);
    }
}
