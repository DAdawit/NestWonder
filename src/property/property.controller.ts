import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
  Query,
  ParseBoolPipe,
  UsePipes,
  ValidationPipe,
  Patch,
  Put,
  Delete,
  // Headers,
} from '@nestjs/common';
// import { CreatePropertyDto } from './dto/createProperty.dto';
// import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdpipe';
import {
  CreatePropertyZodDto,
  createPropertyZodSchema,
} from './dto/createPropertyZod.dto';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';
import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/updateProperty.dto';

@Controller('property')
export class PropertyController {
  constructor(private propertyService: PropertyService) {}

  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
    console.log(typeof id, typeof sort);
    return this.propertyService.findOne(id);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createPropertyZodSchema))
  create(
    @Body()
    dto: CreatePropertyZodDto,
  ) {
    console.log('from controller', dto);
    return this.propertyService.create(dto);
  }

  // @Put(':id')
  // @UsePipes(new ZodValidationPipe(createPropertyZodSchema))
  // update(@Param('id', ParseIdPipe) id, @Body() body: CreatePropertyZodDto) {
  //   return body;
  // }

  @Put(':id')
  // @UsePipes(new ZodValidationPipe(createPropertyZodSchema))
  update(
    @Param('id', ParseIdPipe) id: number,
    @Body() body: UpdatePropertyDto,
    @RequestHeader(new ValidationPipe({ validateCustomDecorators: true }))
    headers: HeadersDto,
  ) {
    return this.propertyService.update(id, body); // Now this will be validated against createPropertyZodSchema
  }

  @Delete(':id')
  delete(@Param('id', ParseIdPipe) id: number) {
    return this.propertyService.delete(id);
  }
}
