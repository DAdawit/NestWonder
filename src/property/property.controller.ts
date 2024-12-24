import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
  Query,
  ParseBoolPipe,
  // UsePipes,
  // ValidationPipe,
  // Patch,
  Put,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { IdParamDto } from './dto/idParam.dto';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return { name: 'property' };
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
    console.log(typeof id, typeof sort);
    return { id, sort };
  }

  @Post()
  // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  create(
    @Body() // new ValidationPipe({
    body //   whitelist: true,
    //   forbidNonWhitelisted: true,
    //   groups: ['create'],
    //   always: true,
    // }),
    : CreatePropertyDto,
  ) {
    return body;
  }

  @Put(':id')
  update(@Param() param: IdParamDto, @Body() body: CreatePropertyDto) {
    return body;
  }
}
