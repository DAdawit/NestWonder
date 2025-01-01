import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('')
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: 0 })
  price: number;
}
