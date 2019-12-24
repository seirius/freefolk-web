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
        listen(SocketConfig.PORT, { path: SocketConfig.PATH })
        .on("connection", (socket: Socket) => {
            this.sockets.push(socket);
            socket.on("disconnect", () => {
                const index = this.sockets.findIndex(s => s.id === socket.id);
                if (index > -1) {
                    this.sockets.splice(index, 1);
                }
            });
        });

        this.mqttService.sub({
            channel: "progress",
            callback: (payload: Record<string, any>) => {
                this.sockets.forEach(socket => socket.emit("progress", JSON.stringify(payload)));
            }
        });
        this.mqttService.sub({
            channel: "file_state",
            callback: (payload: Record<string, any>) => {
                this.sockets.forEach(socket => socket.emit("file_state", JSON.stringify(payload)));
            }
        });

    }

}