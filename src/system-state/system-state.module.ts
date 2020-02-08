import { Module } from "@nestjs/common";
import { ProcessStateModule } from "nest-mqtt-client";
import { SystemStateController } from "./system-state.controller";
import { SystemStateService } from "./system-state.service";

@Module({
    imports: [ProcessStateModule],
    providers: [SystemStateService],
    controllers: [SystemStateController],
})
export class SystemStateModule {}
