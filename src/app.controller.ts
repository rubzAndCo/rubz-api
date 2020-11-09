import { Controller, Get } from '@nestjs/common';
import Package from '../package.json'

@Controller()
export class AppController {
  @Get()
  getVersion() {
    const appVersion = Package.version
    return `Rubz API V.${appVersion}`
  }
}
