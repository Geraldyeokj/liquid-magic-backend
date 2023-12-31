import { Controller, Get, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test1')
  test1() {
    return {
      status: HttpStatus.OK,
      message: 'Change password successfully',
    };
  }
}
