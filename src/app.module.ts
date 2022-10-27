import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { StoreModule } from './store/store.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UsersModule, PostsModule,StoreModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
