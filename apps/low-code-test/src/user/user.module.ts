import { Module, forwardRef } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserProviders } from "./user.providers";
import { UserService } from "./user.service";
import { DatabaseModule } from "@app/common/database/database.module";

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    // FeishuController,
    UserController
  ],
  providers: [
    ...UserProviders, UserService
    // , FeishuService
  ],
  exports: [
    UserService
  ]
})
export class UserModule { }