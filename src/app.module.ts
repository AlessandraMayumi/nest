import { Module } from '@nestjs/common';
import { ControllersModule } from './api/1-controllers/controllers.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './environment/database/database.module';

@Module({
  imports: [DatabaseModule, ControllersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
