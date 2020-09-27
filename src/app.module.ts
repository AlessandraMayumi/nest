import { Module } from '@nestjs/common';
import { AuthModule } from './api/auth/auth.module';
import { ControllersModule } from './api/controllers/controllers.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './environment/database/database.module';

@Module({
  imports: [DatabaseModule, ControllersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
