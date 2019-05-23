import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car) private readonly carRepository: Repository<Car>,
  ) {}

  async create(car: Car): Promise<Car> {
    const carCreated = await this.carRepository.save(car);
    return carCreated;
  }

  async findAll(): Promise<Car[]> {
    return await this.carRepository.find();
  }
}
