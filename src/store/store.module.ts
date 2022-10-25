import { Module } from '@nestjs/common';
import { DynamicModule } from '@nestjs/common/interfaces/modules';
import { StoreService } from './store.service';

export interface StoreConfig {
  dirname: string;
  filename: string;
}

@Module({})
export class StoreModule {
  static register(config: StoreConfig): DynamicModule {
    return {
      module: StoreModule,
      providers: [
        StoreService,
        {
          provide: 'STORE_CONFIG',
          useValue: config,
        }
      ],
      exports: [StoreService]
    }
  }
}
