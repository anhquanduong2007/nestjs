import { StoreService } from './store.service';
import { Inject, Injectable } from '@nestjs/common';
import { StoreConfig } from './users.module';

@Injectable()
export class UsersService {
    constructor(
        @Inject('APP_FACEBOOK') appFacebook: any,
        @Inject('STORE_CONFIG') storeConfig: StoreConfig,
        @Inject('STORE_SERVICE') storeService: StoreService
    ) {
        console.log(appFacebook)
        console.log({ dir: storeConfig.dir, path: storeConfig.path })
        storeService.save('hi');
    }
    create(user: any) {
        return user;
    }
}
