import { Injectable } from "@nestjs/common";
import { SystemReportDto } from "./system-state.dto";
import { ProcessStateService } from "nest-mqtt-client";

@Injectable()
export class SystemStateService {

    constructor(
        private readonly processStateService: ProcessStateService,
    ) {}

    public async systemReport(): Promise<SystemReportDto[]> {
        return new Promise((resolve) => {
            this.processStateService.askForReport({
                expect: [
                    {
                        name: "freefolk-youtube",
                        times: 1,
                    },
                ],
                feedbackOnEachReport: false,
                onReport: (reports) => resolve(reports
                    .map(({name, state, info}) => ({name, state, info}))),
            });
        });
    }

}
