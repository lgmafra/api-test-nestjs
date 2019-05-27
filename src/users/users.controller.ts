import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import bcrypt from 'bcryptjs';
import { UsersService } from './users.service';
import { PassportModule, AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Req() request: Request) {
    request.body.password = await bcrypt.hash(request.body.password, 8);
    const user = await this.usersService.create(request.body);
    return user;
  }

  @Get()
  @UseGuards(AuthGuard())
  async findAll() {
    return await this.usersService.findAll();
  }
}
