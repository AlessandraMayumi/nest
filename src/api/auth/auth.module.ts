import { Module } from '@nestjs/common';
import { ServicesModule } from '../services/services.module';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
    imports: [ServicesModule],
    providers: [LocalStrategy, JwtStrategy]
})

export class AuthModule {}
