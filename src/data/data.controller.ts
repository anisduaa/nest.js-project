import { Controller, Post, Body } from '@nestjs/common';

@Controller('data')
export class DataController {
  @Post()
  create(@Body() data: any) {
    return { message: 'Received JSON data', data };
  }
}
