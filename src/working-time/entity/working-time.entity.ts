import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import dayjs from 'dayjs';

@Entity()
export class WorkingTimeEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column('datetime')
  workDate: dayjs.Dayjs

  @Column('int')
  timeWorked: number
}
