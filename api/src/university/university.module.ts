import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { UniversityController } from './university.controller';
import { UniversityService } from './university.service';

@Module({
  controllers: [UniversityController],
  providers: [UniversityService],
  imports: [HttpModule],
})
export class UniversityModule {}
