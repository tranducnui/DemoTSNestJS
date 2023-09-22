import { Module } from '@nestjs/common';
import { NestService } from './nest.service';
import { NestController } from './nest.controller';

@Module({
  controllers: [NestController],
  providers: [NestService],
  exports: [NestService],
})
export class NestModule {}
