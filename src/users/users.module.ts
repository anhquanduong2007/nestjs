import { StoreService } from './store.service';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

export interface StoreConfig {
  dir: string;
  path: string;
}
const configFacbook = {
  appId: 'facebook001',
  appSecret: 'facebook001'
}

function createStore(config: StoreConfig): StoreService {
  console.log(config)
  return new StoreService()
}

@Module({
  controllers: [UsersController],
  providers: [UsersService,
    {
      provide: 'APP_FACEBOOK',
      useValue: configFacbook
    },
    {
      provide: 'STORE_CONFIG',
      useValue: {
        dir: 'store',
        path: 'user'
      } as StoreConfig
    },
    {
      provide: 'STORE_SERVICE',
      useFactory: createStore,
      inject: [{
        token: 'STORE_CONFIG',
        optional: true
      }]
    }
  ]
})
export class UsersModule { }
