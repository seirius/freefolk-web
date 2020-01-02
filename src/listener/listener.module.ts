import { Module } from "@nestjs/common";
import { MqttModule, ProcessStateModule } from "nest-mqtt-client";
import { ListenerService } from "./listener.service";

@Module({
    imports: [MqttModule, ProcessStateModule],
    providers: [ListenerService],
    exports: [ListenerService],
})
export class ListenerModule {}
