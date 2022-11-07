import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UsersListDto } from './dto/users.dto';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>
    ) {}

    public async getUsersList(): Promise<Users[]> {
        return this.usersRepository.createQueryBuilder('users').orderBy('users.rank', 'ASC').getMany();
    }

    public async createUser(user: CreateUserDto): Promise<Users> {
        try {
            if (!user.rank) {
                const maxRank = await this.usersRepository
                    .createQueryBuilder('users')
                    .select('MAX(users.rank)', 'value')
                    .getRawOne();
                user.rank = maxRank.value + 1;
            }
            return this.usersRepository.create(user).save();
        } catch (error) {}
    }

    public async updateUserList(usersList: UsersListDto[]) {
        return Promise.all(
            usersList.map((user) => {
                this.usersRepository.update({ id: user.id }, user);
            })
        );
    }

    public async deleteUser(id: string): Promise<any> {
        return this.usersRepository.delete({ id });
    }
}
