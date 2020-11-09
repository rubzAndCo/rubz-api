import { WorkingTimeEntity } from '../entity/working-time.entity';
import { Injectable, ValidationPipe } from '@nestjs/common';
import dayjs from 'dayjs'
import { DateProvider } from '../../lib/date.provider';

export interface WorkingTimeValidate {
  validate (data: any): WorkingTimeEntity
}

@Injectable()
export class WorkingTimeValidate implements WorkingTimeValidate {

  constructor(private dateProvider: DateProvider) {
  }

  validate(data: any): WorkingTimeEntity {
    const errors = []

    try {
      const date = this.dateProvider.stringToDate(data.date)

      if (!data.hours) errors.push('No hours provided')
      if (!date || !this.dateProvider.isValid(date)) errors.push('No date provided')

      if (errors.length > 0) throw Error(errors.toString())

      const entity = new WorkingTimeEntity()

      entity.timeWorked = parseInt(data.hours)
      entity.workDate = date

      return entity
    } catch(err) {
      throw new WorkingTimeValidateError(err.message)
    }
  }
}

export class WorkingTimeValidateError extends Error {
  constructor(message: string) {
    super();

    this.message = message
  }
}
