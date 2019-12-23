import { Module } from '@nestjs/common';
import { DefaultModule } from './default/default.module';
import { ListenerModule } from './listener/listener.module';

@Module({
    imports: [DefaultModule, ListenerModule],
    controllers: [],
    providers: [],
})
export class AppModule { }
