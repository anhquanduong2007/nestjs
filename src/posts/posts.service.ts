import { StoreService } from './../store/store.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
    constructor(private readonly storeService: StoreService) {
        this.storeService.save('save zo file posts này!');
    }
}
