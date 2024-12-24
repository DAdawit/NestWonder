import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertyService {
  findAll() {
    return 'This action returns all property';
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  create(createPropertyDto) {
    return 'This action adds a new property';
  }

  update(id: number, updatePropertyDto) {
    return `This action updates a #${id} property`;
  }
}
