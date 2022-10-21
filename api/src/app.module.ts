import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UniversityModule } from './university/university.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [UniversityModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
