import { UsersService } from './users.service';
import { Controller, Get, Inject } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

@Controller('users')
export class UsersController {
    /**
     * Có 2 cách để lấy ra thực thể
     * Cách 1: là dùng ModuleRef - lấy từ trong container ra tại vì nó tham chiếu đến container
     * Cách 2: là gọi trực tiếp UserService ra luôn không cần lấy từ module ra nữa
     */
    // constructor(private moduleRef: ModuleRef, private readonly usersService: UsersService){}

    constructor(private readonly moduleRef: ModuleRef, @Inject('USER_SERVICE') private readonly usersService: UsersService) { }


    @Get('hello')
    hello() {
        // const usersService = this.moduleRef.get(UsersService);
        // usersService.sayHello();

        this.moduleRef.get('USER_SERVICE').sayHello()
    }

    @Get('hi')
    hi() {
        this.usersService.sayHello()
    }
}
