import { Controller, Get, Logger, HttpStatus } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { SystemReportDto, SystemReportResponseDto } from "./system-state.dto";
import { SystemStateService } from "./system-state.service";

@Controller()
export class SystemStateController {

    constructor(
        private readonly systemStateService: SystemStateService,
    ) {}

    @Get("/system-report")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "System report",
        type: SystemReportResponseDto,
    })
    async systemReport(): Promise<SystemReportResponseDto> {
        return {
            reports: await this.systemStateService.systemReport(),
        };
    }

}
