import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';
import { UsersModule } from './users/users.module';
import { SecurityService } from './users/security.service';

@Module({
  imports: [UsersModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
