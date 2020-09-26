import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "../User/user.entity";

@Entity()
export class TodoListEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    todo: string;

    @Column()
    status: 'In Progress' | 'Ongoing' | 'Finished';

    @ManyToOne(
        () => UserEntity,
        user => user.todos,
        { nullable: false }
    )
    user: UserEntity;
    userId: number;
}