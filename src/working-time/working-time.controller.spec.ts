import { Test, TestingModule } from '@nestjs/testing';
import { WorkingTimeController } from './working-time.controller';
import { WorkingTimeRepository } from './services/working-time.repository';
import { Repository } from 'typeorm';
import { WorkingTimeEntity } from './entity/working-time.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { WorkingTimeDto } from './services/working-time.dto';

describe('WorkingTime Controller', () => {
  let controller: WorkingTimeController;
  let service: WorkingTimeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkingTimeController],
      providers: [
        WorkingTimeRepository,
        {
          provide: getRepositoryToken(WorkingTimeEntity),
          useValue: Repository
        }
      ]
    }).compile();

    service = module.get<WorkingTimeRepository>(WorkingTimeRepository);
    controller = module.get<WorkingTimeController>(WorkingTimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('POST - Integration', () => {

    /* it('Should create a new working time', () => {
      // GIVEN
      const workingTimeDto = new WorkingTimeDto()

      workingTimeDto.date = new Date()
      workingTimeDto.hours = 2

      const workingTimeEntity: WorkingTimeEntity = { workDate: workingTimeDto.date, timeWorked: workingTimeDto.hours }

      const mock = jest.spyOn(service, 'createWorkingTime').mockImplementation(() => true);

      // WHEN
      const result = controller.create(workingTimeDto)

      // THEN
      expect(mock).toBeCalledWith(workingTimeEntity)
      expect(result).toBe(true)
    })*/
  })
});
