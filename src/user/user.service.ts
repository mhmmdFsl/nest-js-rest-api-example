import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.name = createUserDto.name;
    user.gender = createUserDto.gender;
    user.password = createUserDto.password;
    user.status = 'ACTIVE';
    user.email = createUserDto.email;
    return this.userRepository.save(user);
  }

  async findUserByEmail(email: string) {
    return this.userRepository.findOneBy({email: email});
  }
}
