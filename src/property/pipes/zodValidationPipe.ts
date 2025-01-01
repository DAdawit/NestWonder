import { ZodSchema } from 'zod';
import { PipeTransform, BadRequestException } from '@nestjs/common';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: any) {
    console.log('Incoming value from zodValidationPipe.ts:', value);
    const parsedValue = this.schema.safeParse(value);

    if (!parsedValue.success) {
      console.log('Validation errors:', parsedValue.error.format());
    }

    if (parsedValue.success) return parsedValue.data;

    throw new BadRequestException(parsedValue.error.format());
  }
}
