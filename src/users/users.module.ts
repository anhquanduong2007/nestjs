import { StoreModule } from './../store/store.module';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [StoreModule.forFeature({
    filename: 'users.json',
  })],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule { }
