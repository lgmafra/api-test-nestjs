import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Car } from './interfaces/cars.interface';
import { CreateCarDto } from './dto/cars.dto';

@Injectable()
export class CarsService {
  constructor(@InjectModel('Car') private readonly carModel: Model<Car>) {}

  async create(createCarDto: CreateCarDto): Promise<Car> {
    const car = new this.carModel(createCarDto);
    return await car.save();
  }

  async findAll(): Promise<Car[]> {
    return await this.carModel.find().exec();
  }
}
