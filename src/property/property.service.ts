import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { CreatePropertyZodDto } from './dto/createPropertyZod.dto';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property) private propertyRepo: Repository<Property>,
  ) {}

  async findAll() {
    return await this.propertyRepo.find();
  }

  async findOne(id: number) {
    const property = await this.propertyRepo.findOne({ where: { id } });
    if (!property) throw new NotFoundException();
    return property;
  }

  async create(dto: CreatePropertyDto | CreatePropertyZodDto) {
    return await this.propertyRepo.save(dto);
  }

  async update(id: number, dto: UpdatePropertyDto) {
    // First find the entity
    const property = await this.propertyRepo.findOne({ where: { id } });

    if (!property) throw new NotFoundException();

    // Update the entity
    const updatedProperty = Object.assign(property, dto);

    // Save and return the updated entity
    return await this.propertyRepo.save(updatedProperty);
  }

  async delete(id: number) {
    const property = await this.propertyRepo.findOne({ where: { id } });

    if (!property) throw new NotFoundException();
    const data = await this.propertyRepo.delete({ id });
    if (data.affected > 0) return { message: 'item deleted successfully' };
  }
}
