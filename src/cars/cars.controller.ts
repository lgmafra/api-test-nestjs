import { Controller, Body, Post, Get } from '@nestjs/common';
import { CreateCarDto } from './dto/cars.dto';
import { CarsService } from './cars.service';
import { Car } from './interfaces/cars.interface';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  async create(@Body() createCarDto: CreateCarDto): Promise<Car> {
    const car = await this.carsService.create(createCarDto);
    return car;
  }

  @Get()
  async findAll(): Promise<Car[]> {
    return await this.carsService.findAll();
  }
}
