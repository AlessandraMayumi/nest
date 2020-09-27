import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoListEntity } from 'src/api/domain/TodoList/todo-list.entity';
import { UserEntity } from 'src/api/domain/User/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite', 
            database: 'vnt-bootcamp-nest-js-sqlite3',
            entities: [UserEntity, TodoListEntity],
            synchronize:true
        })
    ]
})
export class DatabaseModule {}
