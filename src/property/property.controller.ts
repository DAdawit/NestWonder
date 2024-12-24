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
// import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdpipe';

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
    //   forbidNonWhitelisted: true,
    body //   whitelist: true,
    //   groups: ['create'],
    //   always: true,
    // }),
    : CreatePropertyDto,
  ) {
    return body;
  }

  @Put(':id')
  update(@Param('id', ParseIdPipe) id, @Body() body: CreatePropertyDto) {
    return body;
  }
}
