import { WorkingTimeEntity } from '../entity/working-time.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkingTimeRepository {

  constructor(
    @InjectRepository(WorkingTimeEntity)
    private workingTimeEntityRepository: Repository<WorkingTimeEntity>,
  ) {}

  async createWorkingTime(workingTime: WorkingTimeEntity): Promise<WorkingTimeEntity> {
    return this.workingTimeEntityRepository.save(workingTime)
  }

  async findWorkingTime(): Promise<WorkingTimeEntity[] | null> {
    return this.workingTimeEntityRepository.find()
  }
}
