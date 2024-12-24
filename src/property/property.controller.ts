import { Controller, Get, Post, Param, Body } from '@nestjs/common';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return { name: 'property' };
  }

  @Get(':id/:slug')
  findOne(@Param() id: number, @Param() slug: string) {
    return { id, slug };
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }
}
