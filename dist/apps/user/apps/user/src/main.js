"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const user_module_1 = require("./user/user.module");
const transform_interceptor_1 = require("../../../libs/common/src/interceptors/transform.interceptor");
const base_exception_filter_1 = require("../../../libs/common/src/exceptions/base.exception.filter");
const http_exception_filter_1 = require("../../../libs/common/src/exceptions/http.exception.filter");
const common_1 = require("@nestjs/common");
const doc_1 = require("./doc");
async function bootstrap() {
    const app = await core_1.NestFactory.create(user_module_1.UserModule);
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    app.useGlobalFilters(new base_exception_filter_1.AllExceptionsFilter(), new http_exception_filter_1.HttpExceptionFilter());
    app.enableVersioning({
        type: common_1.VersioningType.URI
    });
    (0, doc_1.generateDocument)(app);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map