import { Controller, Get, Logger } from "@nestjs/common";
import { ProcessStateService } from "nest-mqtt-client";

@Controller()
export class SystemStateController {

    private readonly logger = new Logger(SystemStateController.constructor.name);

    constructor(
        private readonly processStateService: ProcessStateService,
    ) {}

    @Get("/system")
    test(): string {
        this.processStateService.askForReport({
            onReport: (reports) => this.logger.log(reports),
        });
        return "heh";
    }

}