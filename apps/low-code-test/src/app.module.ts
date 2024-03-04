import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from 'libs/common/src/utils';
import { UserModule } from './user/user.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from 'libs/common/src/interceptors/transform.interceptor';
@Module({
  imports: [
    ConfigModule.forRoot({ ignoreEnvFile: true, isGlobal: true, load: [getConfig] }),
    UserModule
  ],
  controllers: [],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass:TransformInterceptor,
  }],
})
export class AppModule {}
