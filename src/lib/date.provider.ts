import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { Injectable } from '@nestjs/common';

@Injectable()
export class DateProvider {
  dayjs

  constructor() {
    this.dayjs = dayjs

    dayjs.extend(utc)
    dayjs.extend(timezone)

    this.dayjs.locale('fr')
    this.dayjs.tz.setDefault('Europe/Paris')
  }

  stringToDate(stringDate: string): dayjs.Dayjs {
    return this.dayjs(stringDate).tz('Europe/paris')
  }

  isValid(date: dayjs.Dayjs): boolean {
    return date.isValid()
  }
}
