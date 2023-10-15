import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginRqDto } from './dto/loginrq.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginResponseDto } from "./dto/login-response.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  async login(loginRqDto: LoginRqDto) {
    const user = await this.userService.findUserByEmail(loginRqDto.email);
    if (user.password != loginRqDto.password) {
      throw new BadRequestException('Password not match');
    }
    const payload = {
      sub: user.id,
      email: user.email
    };
    const token = this.jwtService.sign(payload);
    return new LoginResponseDto(
      user,
      token
    );
  }
}
