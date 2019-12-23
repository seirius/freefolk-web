import * as env from "env-var";
import { config as envConfig } from "dotenv";
envConfig();

export class SocketConfig {
    public static readonly PORT = env.get("SOCKET_PORT", "5000").asPortNumber();
}