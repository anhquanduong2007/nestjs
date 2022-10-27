
import { Module } from '@nestjs/common';
import { DynamicModule } from '@nestjs/common/interfaces/modules';
import { StoreService } from './store.service';

export interface StoreFeatureConfig {
  filename: string;
}

export interface StoreRootConfig {
  dirname: string;
}

export type StoreConfig = Partial<StoreRootConfig & StoreFeatureConfig>

let rootStoreConfig: StoreConfig;
const DEFAULT_STORE_DIRNAME: string = 'store'
const DEFAULT_FILE_NAME = 'data.json';
const STORE_CONFIG_TOKEN = 'STORE_CONFIG_TOKEN'

@Module({
  providers: [StoreService],
  exports: [StoreService]
})
class RootStoreModule {

}

@Module({})
export class StoreModule {

  static forRoot(config?: StoreRootConfig): DynamicModule {
    rootStoreConfig = StoreModule.createConfig(config)
    return {
      module: RootStoreModule,
      providers: [
        {
          provide: STORE_CONFIG_TOKEN,
          useValue: rootStoreConfig,
        },
      ],
      // mình chỉ dùng tính năng ở feature thôi nên không export ở root
    }
  }

  static forFeature(config: StoreFeatureConfig): DynamicModule {
    const token = 'STORE_SERVICE' + config.filename
    return {
      module: StoreModule,
      providers: [
        {
          provide: token,
          useFactory: () => {
            const featureStoreConfig = StoreModule.createConfig({ ...rootStoreConfig, ...config })
            return new StoreService(featureStoreConfig)
          }
        }
      ],
      exports: [token]
    }
  }

  private static createConfig(config: StoreConfig): StoreConfig {
    const defaultConfig: StoreConfig = {
      dirname: DEFAULT_STORE_DIRNAME,
      filename: DEFAULT_FILE_NAME
    }
    // check nếu người dùng truyền config vào thì override lại config cũ thành config mới
    return { ...defaultConfig, ...config }
  }
}
