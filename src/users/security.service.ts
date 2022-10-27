import { UsersService } from './users.service';
import { Injectable, Inject, forwardRef } from '@nestjs/common';

@Injectable()
export class SecurityService {
    constructor(
        @Inject(forwardRef(() => UsersService))
        private usersService: UsersService
    ) { }
}
