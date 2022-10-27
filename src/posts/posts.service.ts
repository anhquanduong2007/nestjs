import { StoreService } from './../store/store.service';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
    constructor(@Inject('STORE_SERVICEposts.json') private storeService: StoreService) {
        this.storeService.save('save zo file posts này!');
    }
}
