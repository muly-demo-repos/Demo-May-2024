import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WarehouseModuleBase } from "./base/warehouse.module.base";
import { WarehouseService } from "./warehouse.service";
import { WarehouseController } from "./warehouse.controller";
import { WarehouseResolver } from "./warehouse.resolver";

@Module({
  imports: [WarehouseModuleBase, forwardRef(() => AuthModule)],
  controllers: [WarehouseController],
  providers: [WarehouseService, WarehouseResolver],
  exports: [WarehouseService],
})
export class WarehouseModule {}
