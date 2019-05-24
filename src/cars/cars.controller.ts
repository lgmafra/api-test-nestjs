import { Controller, Param, Post, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { CarsService } from './cars.service';
import { Car } from './car.entity';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  async create(@Req() request: Request): Promise<Car> {
    const car = await this.carsService.create(request.body);
    return car;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Car> {
    return await this.carsService.findById(id);
  }

  @Get()
  async findAll(): Promise<Car[]> {
    return await this.carsService.findAll();
  }
}
