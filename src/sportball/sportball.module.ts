import { Module } from '@nestjs/common';
import { SportballService } from './sportball.service';
import { SportballController } from './sportball.controller';

@Module({
  controllers: [SportballController],
  providers: [SportballService],
})
export class SportballModule {}
