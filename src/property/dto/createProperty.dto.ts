import { IsString, IsInt, Length } from 'class-validator';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class CreatePropertyDto {
  @IsString()
  //   @Length(2, 10, { message: 'name must be at least 2 characters' })
  @Length(2, 10)
  name: string;

  @IsString()
  @Length(2, 10, { groups: ['create'] })
  @Length(2, 10, { groups: ['update'] })
  description: string;

  @IsInt()
  area: number;
}
