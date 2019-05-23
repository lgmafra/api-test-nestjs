import * as mongoose from 'mongoose';

export const CarSchema = new mongoose.Schema({
  maker: String,
  model: String,
  color: String,
  engine: String,
});
