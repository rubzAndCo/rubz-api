import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { WorkingTimeDto } from './services/working-time.dto';
import { WorkingTimeValidateError } from './services/working-time-validate';
import { WorkingTime } from './working-time';

@Controller('working-time')
export class WorkingTimeController {

  constructor(
    private workingTimeDto: WorkingTimeDto,
    private workingTime: WorkingTime,
    ) {}

  @Post()
  async create(@Body() data: any) {
    try {
      const workingTime = await this.workingTime.create(data)

      return this.workingTimeDto.render(workingTime)
    } catch(err) {
      if (err instanceof WorkingTimeValidateError)
        throw new HttpException(err.message, HttpStatus.FORBIDDEN);

      throw new HttpException('Fatal error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async getWorkingTimes() {
    try {
      const workingTime = await this.workingTime.find()

      if (!workingTime) return {
        message: 'not found'
      }

      return this.workingTimeDto.render(workingTime)
    } catch (err) {
      if (err instanceof WorkingTimeValidateError)
        throw new HttpException(err.message, HttpStatus.FORBIDDEN);

      throw new HttpException('Fatal error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
