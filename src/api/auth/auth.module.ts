import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from '../controllers/auth/auth.controller';
import { AuthService } from '../services/auth/auth.service';
import { ServicesModule } from '../services/services.module';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
    imports: [ServicesModule, PassportModule],
    providers: [AuthService, LocalStrategy]
})

export class AuthModule {}
