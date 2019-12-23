import { Injectable } from "@nestjs/common";
import { MqttService } from "nest-mqtt-client";
import { listen, Socket } from "socket.io";
import { SocketConfig } from "./../config/SocketConfig";

@Injectable()
export class ListenerService {

    private sockets: Socket[] = [];

    constructor(
        private readonly mqttService: MqttService,
    ) {
        listen(SocketConfig.PORT)
        .on("connect", () => {
            this.mqttService.sub({
                channel: "convert",
                callback: (payload: Record<string, any>) => {
                    this.sockets.forEach(socket => socket.emit("convert", JSON.stringify(payload)));
                }
            });
            this.mqttService.sub({
                channel: "download",
                callback: (payload: Record<string, any>) => {
                    this.sockets.forEach(socket => socket.emit("download", JSON.stringify(payload)));
                },
            });
        }).on("connection", (socket: Socket) => {
            console.log(this.sockets.length);
            this.sockets.push(socket);
            socket.on("disconnect", () => {
                const index = this.sockets.findIndex(s => s.id === socket.id);
                if (index > -1) {
                    this.sockets.splice(index, 1);
                }
            });
        })
        .on("disconnect", (socket: Socket) => {
            console.log(socket);
        });

    }

}