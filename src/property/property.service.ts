import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property) private propertyRepo: Repository<Property>,
  ) {}

  findAll() {
    return 'This action returns all property';
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  async create(dto: CreatePropertyDto) {
    return await this.propertyRepo.save(dto);
  }

  update(id: number, updatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  delete(id: number) {
    return `This action removes a #${id} property`;
  }
}
