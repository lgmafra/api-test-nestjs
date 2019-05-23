import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car{
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 50})
    maker: string

    @Column({length: 50})
    model: string

    @Column({length: 20})
    color: string

    @Column({length: 3})
    engine: string
}