import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    const userCreated = await this.userRepository.save(user);
    return userCreated;
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findByUser(username: string): Promise<any> {
    return await this.userRepository.find({ username: username });
  }
}
