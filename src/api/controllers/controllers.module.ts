import { Module } from '@nestjs/common';
import { ServicesModule } from '../services/services.module';
import { TodoListController } from './todo-list/todo-list.controller';
import { UserController } from './user/user.controller';
import { AuthController } from './auth/auth.controller';

@Module({
    imports: [ServicesModule],
    controllers: [UserController, TodoListController, AuthController]
})
export class ControllersModule {}
