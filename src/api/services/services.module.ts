import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../domain/User/user.entity';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity])
    ],
    providers: [UserService, AuthService],
    exports: [UserService, AuthService]
})
export class ServicesModule {}
