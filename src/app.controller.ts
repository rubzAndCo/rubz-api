import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  count = 0

  @Get()
  getHello(): { text: string, date: number, refresh: number } {
    return this.appService.getHello(++this.count);
  }
}
