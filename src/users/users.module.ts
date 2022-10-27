import { SecurityService } from './security.service';
import { LoggerService } from './../logger/logger.service';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, LoggerService, SecurityService]
})
export class UsersModule { }
