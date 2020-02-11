import { Controller, Get, HttpStatus, Req } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { Request } from "express";

@Controller()
export class DefaultController {

    @Get("ping")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Healthcheck endpoint",
    })
    ping(@Req() request: Request): string {
        console.log(request.session);
        return "pong";
    }

}
