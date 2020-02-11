import * as env from "env-var";
import { config as envConfig } from "dotenv";
envConfig();

export class RedisConfig {
    public static readonly HOST = env.get("REDIS_HOST").required().asString();
    public static readonly PORT = env.get("REDIS_PORT", "6379").asPortNumber();
    public static readonly SESSION_NAME = env.get("SESSION_NAME", "ffWebSession").asString();
    public static readonly SESSION_SECRET = env.get("SESSION_SECRET", "aa0ac80e-46b5-4705-8b56-94c84c88513c").asString();
    public static readonly SESSION_DB = env.get("REDIS_SESSION_DB", "1").asIntPositive();
}
