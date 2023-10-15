import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginRqDto } from './dto/loginrq.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/register')
  async register(@Res() res: Response, @Body() createUserDto: CreateUserDto) {
    const user = await this.authService.register(createUserDto);
    res.status(HttpStatus.OK).json({
      status: 'Success',
      data: user,
    });
  }

  @Post('/login')
  async login(@Res() res: Response, @Body() loginRqDto: LoginRqDto) {
    const user = await this.authService.login(loginRqDto);
    res.status(HttpStatus.OK).json({
      status: 'SUCCESS',
      data: user,
    });
  }
}
