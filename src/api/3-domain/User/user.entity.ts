import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TodoListEntity } from "../TodoList/todo-list.entity";

@Entity()
export class UserEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @OneToMany(
        () => TodoListEntity, 
        todos => todos.user,
        { eager: true }
    )
    todos: TodoListEntity[];
}