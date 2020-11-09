import { Module } from '@nestjs/common';
import { WorkingTimeController } from './working-time.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkingTimeEntity } from './entity/working-time.entity';
import { WorkingTimeRepository } from './services/working-time.repository';
import { WorkingTimeValidate } from './services/working-time-validate';
import { WorkingTimeDto } from './services/working-time.dto';
import { DateProvider } from '../lib/date.provider';
import { WorkingTime } from './working-time';

@Module({
  controllers: [WorkingTimeController],
  imports: [
    TypeOrmModule.forFeature([WorkingTimeEntity])
  ],
  providers: [
    WorkingTime,
    WorkingTimeDto,
    WorkingTimeValidate,
    WorkingTimeRepository,
    DateProvider
  ],
})
export class WorkingTimeModule {
}
