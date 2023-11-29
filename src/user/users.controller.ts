import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async createUser(@Body() data: CreateUserDto) {
    return this.usersService.createUser(data);
  }

  @Get('test')
  async getFirstData() {
    return { message: 'test test test go go go' };
  }
}
