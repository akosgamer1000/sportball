import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SportballModule } from './sportball/sportball.module';

@Module({
  imports: [SportballModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
