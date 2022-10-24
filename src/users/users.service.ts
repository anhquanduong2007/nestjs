import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    sayHello() {
        console.log('say hi');
    }
}
