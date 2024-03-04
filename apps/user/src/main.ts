import { NestFactory } from '@nestjs/core';
import { UserModule } from './user/user.module';
import { TransformInterceptor } from '@app/common/interceptors/transform.interceptor';
import { AllExceptionsFilter } from '@app/common/exceptions/base.exception.filter';
import { HttpExceptionFilter } from '@app/common/exceptions/http.exception.filter';
import { VersioningType } from '@nestjs/common';
import { generateDocument } from './doc';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
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
  await app.listen(3000);
}
bootstrap();
