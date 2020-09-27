import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../domain/User/user.entity';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/contants';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' }
        }),
    ],
    providers: [UserService, AuthService],
    exports: [UserService, AuthService]
})
export class ServicesModule {}
 