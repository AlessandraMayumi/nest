import { Module } from '@nestjs/common';
import { ServicesModule } from '../2-services/services.module';
import { TodoListController } from './todo-list/todo-list.controller';
import { UserController } from './user/user.controller';

@Module({
    imports: [ServicesModule],
    controllers: [UserController, TodoListController]
})
export class ControllersModule {}
