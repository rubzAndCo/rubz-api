import { WorkingTimeValidate } from './services/working-time-validate';
import { WorkingTimeRepository } from './services/working-time.repository';
import { WorkingTimeEntity } from './entity/working-time.entity';
import { Injectable } from '@nestjs/common';

export interface WorkingTime {
  create(data: any): Promise<WorkingTimeEntity>,
  find(data: any): Promise<WorkingTimeEntity[] | null>
}

@Injectable()
export class WorkingTime implements WorkingTime {
  constructor(
    private workingTimeValidation: WorkingTimeValidate,
    private workingTimeRepository: WorkingTimeRepository
  ) {
  }

  async create(data: any): Promise<WorkingTimeEntity> {
    const validatedWorkingTime = this.workingTimeValidation.validate(data)

    return this.workingTimeRepository.createWorkingTime(validatedWorkingTime)
  }

  async find(): Promise<WorkingTimeEntity[] | null> {
    // Entre deux dates
    // Par mois ?
    // Par *** validée

    return this.workingTimeRepository.findWorkingTime()
  }
}
