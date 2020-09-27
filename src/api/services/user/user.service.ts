import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/api/domain/User/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ){}

    async getAllUsers(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    async getUserById(id: number): Promise<UserEntity> {
        return await this.userRepository.findOne({ where: { id: id } })
    }

    async getUserByUsername(username: string): Promise<UserEntity> {
        return await this.userRepository.findOne({ where: { username: username } })
    }

    async createNewUser(newUser: UserEntity): Promise<UserEntity> {
        // not duplicate username
        return await this.userRepository.save(newUser);
    }  

    async updateUser(updateUser: UserEntity): Promise<UserEntity> {
        const userExists = await this.getUserById(updateUser.id);
        if (!userExists) {
            throw new BadRequestException(
                'An User with the given Id does not exist'
            );
        }
        return await this.userRepository.save(updateUser);
    }

    async deleteUser(id: number): Promise<void> {
        const userExists = await this.getUserById(id);
        if (!userExists) {
            throw new BadRequestException(
                'An User with the given Id does not exist'
            );
        }
        await this.userRepository.delete(id);
    }
}
