import { Module } from "@nestjs/common";
import { MqttModule } from "nest-mqtt-client";
import { ListenerService } from "./listener.service";

@Module({
    imports: [MqttModule],
    providers: [ListenerService],
    exports: [ListenerService],
})
export class ListenerModule {}