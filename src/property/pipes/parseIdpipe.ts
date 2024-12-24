import { PipeTransform, BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class ParseIdPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const val = parseInt(value, 10);
    if (isNaN(val)) throw new BadRequestException('id must be a number');
    if (val <= 0) throw new BadRequestException('id must be a positive number');
    return val;
  }
}
