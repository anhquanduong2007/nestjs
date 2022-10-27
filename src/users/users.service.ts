import { StoreService } from './../store/store.service';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor(@Inject('STORE_SERVICEusers.json') private storeService: StoreService) {
        this.storeService.save('save zo file users này!');
    }
}
