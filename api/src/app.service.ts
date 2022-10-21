import { Injectable } from '@nestjs/common';
import { HealthCheck } from './models/health-check.interface';

@Injectable()
export class AppService {
  healthcheck(): HealthCheck {
    return {
      status: 'OK',
      message: 'App is running',
    };
  }
}
