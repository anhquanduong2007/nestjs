import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  // providers: [UsersService],
  /**
   * Ở đây chúng ta đang providers theo classname, giả sử chúng ta tải 1 cái scoure trên mạng về, nó cũng viết sẵn những module này rồi, nó cũng có UserService các
   * thứ bên trong đó thì đương nhiên cái UserService của mình sẽ conflict với cái scoure chúng ta tải về đó thì khi đấy chúng ta có thể provider theo 1 cái key nào đó
   * 
   */
  providers: [{
    provide: 'USER_SERVICE',
    useClass: UsersService
  }]
})
export class UsersModule { }
