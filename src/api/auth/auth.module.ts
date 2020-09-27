import { Module } from '@nestjs/common';
import { ServicesModule } from '../services/services.module';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
    imports: [ ServicesModule ],
    providers: [LocalStrategy]
})

export class AuthModule {}
