import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('world')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getBye(): string {
    return this.appService.getBye();
  }
}
