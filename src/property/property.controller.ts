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
  // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  create(
    @Body() // new ValidationPipe({
    //   forbidNonWhitelisted: true,
    body: CreatePropertyZodDto,
  ) {
    return this.propertyService.create(body);
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
    @Body() body: CreatePropertyDto,
    @RequestHeader(new ValidationPipe({ validateCustomDecorators: true }))
    headers: HeadersDto,
  ) {
    return this.propertyService.update(id, body); // Now this will be validated against createPropertyZodSchema
  }
}
