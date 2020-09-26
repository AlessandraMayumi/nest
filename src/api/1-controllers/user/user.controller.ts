import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { UserService } from 'src/api/2-services/user/user.service';
import { UserEntity } from 'src/api/3-domain/User/user.entity';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async getUsers(): Promise<UserEntity[]> {
        return await this.userService.getAllUsers();
    }

    @Post()
    @HttpCode(201)
    async createUser(@Body() newUser: UserEntity): Promise<UserEntity> {
        return await this.userService.createNewUser(newUser);
    }

    @Put()
    async updateUser(@Body() updateUser: UserEntity): Promise<UserEntity> {
        return await this.userService.updateUser(updateUser);
    }

    @Delete()
    async deleteUser(@Param('id') id: number): Promise<void>{
        return await this.userService.deleteUser(id);
    }
}
