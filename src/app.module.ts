import { Module } from "@nestjs/common";
import { DefaultModule } from "./default/default.module";
import { ListenerModule } from "./listener/listener.module";
import { SystemStateModule } from "./system-state/system-state.module";

@Module({
    imports: [DefaultModule, ListenerModule, SystemStateModule],
    controllers: [],
    providers: [],
})
export class AppModule { }
