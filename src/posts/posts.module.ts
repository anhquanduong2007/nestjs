import { StoreModule } from './../store/store.module';
import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';

@Module({
    imports: [StoreModule.forFeature({
        filename: 'posts.json'
    })],
    providers: [PostsService]
})
export class PostsModule {}
