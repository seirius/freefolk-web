import { createClient } from "redis";
import session from "express-session";
import createRedisStore from "connect-redis";
import { RedisConfig } from "./../config/Redis.config";
const RedisStore = createRedisStore(session);

export function configureSession() {
    return session({
        secret: "asfaf",
        name: "ffWebSession",
        cookie: { secure: true },
        resave: false,
        saveUninitialized: true,
        store: new RedisStore({
            host: RedisConfig.HOST,
            port: RedisConfig.PORT,
            db: RedisConfig.SESSION_DB,
            ttl: 86400,
            client: createClient({
                host: RedisConfig.HOST,
                port: RedisConfig.PORT,
                db: RedisConfig.SESSION_DB,
            }),
        }),
    });
}
