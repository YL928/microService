import { Controller, Get } from '@nestjs/common';
import { AppService,Task } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/tasks')
  getHello(): Task[] {
    return this.appService.getHello();
  }
}
