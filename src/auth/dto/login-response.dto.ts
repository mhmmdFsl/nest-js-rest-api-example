import { User } from '../../user/user.entity';

export class LoginResponseDto {
  constructor(user: User, token: string) {
    this.user = user;
    this.token = token;
  }
  user: User;
  token: string;
}
