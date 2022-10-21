import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthCheck } from './models/health-check.interface';

@Controller('healthcheck')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  healthcheck(): HealthCheck {
    return this.appService.healthcheck();
  }
}
