import { LoggerService } from './../logger/logger.service';
import { UsersService } from './users.service';
import { Controller, Get } from '@nestjs/common';


@Controller('users')
export class UsersController {
    constructor(private readonly loggerService: LoggerService, private readonly usersService: UsersService) {
        console.log(loggerService === this.usersService.logFromUserService())
        /**
         * Nếu ở scope là DEFAULT vì nó là single instance thì ở đây mình sẽ log được ra là true, còn với TRANSIENT thì controller inject thằng LoggerService, bên service
         * cũng inject thằng thằng LoggerService thì với tính chất là inject vào thì sẽ tạo ra 1 thực thể mới thì nó khác nhau nên trả ra false. Còn với REQUEST thì nó sẽ 
         * không ra cái gì vì nó luôn tạo ra 1 thực thể mới nên không so sánh được.
         */
        
     }
    @Get()
    test1() {
        return this.loggerService.log();
    }
    /**
     * - DEFAULT: Khi chạy thì ta thấy kết quả sẽ + 1 đều lên điều này cho thấy là cái LoggerService của mình là 1, không bao giờ thay đổi, thì đấy chính là mặc định của nó,
     * mặc định của Injectable LoggerService là DEFAULT - single instance
     * - Với scope là REQUEST: thì mỗi lần request đến thì nó sẽ tạo cho mình 1 thực thể mới ở đây là tạo cái LoggerService mới, không liên quan gì đến cái cũ nữa, ở đây
     * khi chạy thì ta luôn thấy kết quả là 1
     * - Với TRANSIENT: thì mỗi lần mình inject vào thì nó sẽ tạo ra 1 thực thể mới.
     * => REQUEST là mỗi lần request lên thì nó tạo 1 thực thể mới còn TRANSIENT là mỗi lần inject nó tạo thực thể mới và nếu chúng ta có để ý count thì nó sẽ luôn tăng dần vì
     * mình đang return nó ra ở controller và nó chỉ liên quan đến thằng LoggerService ở controller.
     */
}
