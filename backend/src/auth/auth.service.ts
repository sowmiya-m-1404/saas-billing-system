import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
  private jwtService: JwtService,

  @InjectRepository(User)
  private userRepository: Repository<User>,
) {}
  async login(email: string, password: string) {
  const user = await this.userRepository.findOne({
    where: { email },
  });
  
  if (!user) {
    return {
      message: 'User not found',
    };
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return {
      message: 'Invalid password',
    };
  }

  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };

  return {
    access_token: this.jwtService.sign(payload),
  };
}
}