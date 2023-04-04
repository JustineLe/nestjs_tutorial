import { ClassSerializerInterceptor, Controller, HttpException, HttpStatus } from '@nestjs/common';
import { Inject, Get, Param, UseInterceptors } from '@nestjs/common/decorators';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types';

@Controller('users')
export class UsersController {
    constructor(@Inject('USER_SERVICE') private readonly userService: UsersService) {}
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('')
    getUser() {
        return this.userService.getUser();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/:username')
    getUserByUsername(@Param('username') username: string) {
        const user = this.userService.getUserByUsername(username);
        if (user) return new SerializedUser(user);
        else throw new HttpException('User not found!', HttpStatus.NOT_FOUND);
    }
}
