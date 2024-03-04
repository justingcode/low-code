"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const devops_module_1 = require("./devops.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(devops_module_1.DevopsModule);
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map