import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

import { generateDocument } from './doc';
import { TransformInterceptor } from 'libs/common/src/interceptors/transform.interceptor';
import { AllExceptionsFilter } from 'libs/common/src/exceptions/base.exception.filter';
import { HttpExceptionFilter } from 'libs/common/src/exceptions/http.exception.filter';
declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  //统一响应体格式
  app.useGlobalInterceptors(new TransformInterceptor())
  //异常过滤器
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter())
  //接口版本化管理
  app.enableVersioning({ 
    type:VersioningType.URI
  });
  //创建文档
  generateDocument(app);
  //添加热更新
  // if (module.hot) {
  //   module.hot.accept();
  //   module.hot.dispose(() => app.close());
  // }
  await app.listen(3000);
}
bootstrap();
