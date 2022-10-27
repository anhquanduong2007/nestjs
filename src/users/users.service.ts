import { SecurityService } from './security.service';
import { LoggerService } from './../logger/logger.service';
import { Injectable, Inject, forwardRef } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor(
        private readonly loggerService: LoggerService,
        @Inject(forwardRef(() => SecurityService))
        private readonly securityService: SecurityService) {

    }

    logFromUserService() {
        return this.loggerService;
    }
}
