import { WorkingTimeEntity } from '../entity/working-time.entity';
import { HttpStatus, Injectable } from '@nestjs/common';

export interface WorkingTimeDto {
  render(status: HttpStatus, workingTimeEntity: WorkingTimeEntity | WorkingTimeEntity[]): {
    status: number,
    data: FormattedWorkingTime | FormattedWorkingTime[]
  }
}

@Injectable()
export class WorkingTimeDto implements WorkingTimeDto {
  render(status, data: WorkingTimeEntity): { status: number; data: FormattedWorkingTime | FormattedWorkingTime[] } {
    return {
      status,
      data: this._handleEntities(data)
    };
  }

  private _handleEntities(data: WorkingTimeEntity | WorkingTimeEntity[]): FormattedWorkingTime | FormattedWorkingTime[] {
    return Array.isArray(data)
      ? data.map((workingTimeEntity) => this.workingTimeMapper(workingTimeEntity))
      : this.workingTimeMapper(data)
  }

  private workingTimeMapper(workingTimeEntity: WorkingTimeEntity): FormattedWorkingTime {
    return {
      id: workingTimeEntity.id,
      workDate: workingTimeEntity.workDate.toString(),
      timeWorked: workingTimeEntity.timeWorked,
      isPayed: workingTimeEntity.isPayed ?? false
    }
  }
}

export type FormattedWorkingTime = {
  id: number,
  workDate: string
  timeWorked: number,
  isPayed: boolean
}
