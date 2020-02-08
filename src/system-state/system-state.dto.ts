import { ApiProperty } from "@nestjs/swagger";
import { EProcessState } from "nest-mqtt-client";

export class SystemReportDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    state: EProcessState;

    @ApiProperty()
    info?: Record<string, any>;
}

export class SystemReportResponseDto {
    @ApiProperty({ type: [SystemReportDto ]})
    reports: SystemReportDto[];
}
