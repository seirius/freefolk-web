import { Injectable } from "@nestjs/common";
import { MqttService } from "nest-mqtt-client";

@Injectable()
export class ListenerService {

    constructor(private mqttService: MqttService) {
        this.mqttService.sub({
            channel: "convert",
            callback: (payload: Record<string, any>) => {
                console.log(payload);
            }
        });
        this.mqttService.sub({
            channel: "download",
            callback: (payload: Record<string, any>) => {
                console.log(payload);
            }
        })
    }

}