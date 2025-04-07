import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamDto } from './dtos/get-user-param.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {

    constructor( private usersService: UsersService){

    }

    @Get(":age?")
    getUsers(@Param() param: GetUserParamDto  )
    {
        return this.usersService.getAllUsers();
    }

    @Post()
    createUser(@Body() user: CreateUserDto ){
        const usersService = new UsersService();
        const data = usersService.createUser(user);
        return {
            message:"User Created",
            data: data
        };
    }

    @Patch()
    updateUser(@Body() user: UpdateUserDto ){
        return user;
    }

    // @Get(":id")
    // getUserById(@Param('id') id: string){
    // const usersService = new UsersService();
    // return usersService.getUserById(+id);
    // }

}
