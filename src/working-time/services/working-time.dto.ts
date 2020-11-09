import { WorkingTimeEntity } from '../entity/working-time.entity';
import { Injectable } from '@nestjs/common';

export interface WorkingTimeDto {
  render(workingTimeEntity: WorkingTimeEntity | WorkingTimeEntity[]): {
    status: number,
    data: WorkingTimeEntity | WorkingTimeEntity[]
  }
}

@Injectable()
export class WorkingTimeDto implements WorkingTimeDto {
  render(data: WorkingTimeEntity): { status: number; data: WorkingTimeEntity | WorkingTimeEntity[] } {
    return {
      status: 201,
      data: this._handleEntities(data)
    };
  }

  private _handleEntities(data: WorkingTimeEntity | WorkingTimeEntity[]): WorkingTimeEntity | WorkingTimeEntity[] {
    return Array.isArray(data) ? data.map((workingTimeEntity) => ({
      id: workingTimeEntity.id,
      workDate: workingTimeEntity.workDate,
      timeWorked: workingTimeEntity.timeWorked,
    })) : data
  }
}
