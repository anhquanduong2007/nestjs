import { StoreModule } from './../store/store.module';
import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';

@Module({
    imports: [StoreModule.register({
        dirname: 'store',
        filename: 'posts.json'
    })],
    providers: [PostsService]
})
export class PostsModule {}
