import { Exclude } from "class-transformer";
import { IsNotEmpty, Length } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TodoListEntity } from "../TodoList/todo-list.entity";

@Entity()
export class UserEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    // @Column({ unique: true })
    @Column()
    @IsNotEmpty()
    @Length(3,20)
    username: string;

    @Column()
    @IsNotEmpty()
    @Length(3,20)
    @Exclude({ toPlainOnly:true })
    password: string;

    @OneToMany(
        () => TodoListEntity, 
        todos => todos.user,
        { eager: true } // Eager Loading - Lazy Loading
    )
    todos: TodoListEntity[];
}