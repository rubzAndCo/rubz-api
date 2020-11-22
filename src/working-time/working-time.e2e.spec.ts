import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { WorkingTimeRepository } from './services/working-time.repository';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { WorkingTimeEntity } from './entity/working-time.entity';
import { Repository } from 'typeorm';
import { WorkingTimeController } from './working-time.controller';
import { WorkingTimeDto } from './services/working-time.dto';
import { WorkingTimeValidate } from './services/working-time-validate';
import { WorkingTime } from './working-time';
import { DateProvider } from '../lib/date.provider';
import { WorkingTimePayload } from './types/working-time-payload';

describe('working-time', () => {
  let app: INestApplication;
  const workingTimeService = { createWorkingTime: (data: WorkingTimeEntity) => ({
      id: 1,
      timeWorked: data.timeWorked,
      workDate: data.workDate
    }) };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [WorkingTimeController],
      providers: [
        WorkingTimeDto,
        WorkingTimeRepository,
        WorkingTimeValidate,
        WorkingTime,
        DateProvider,
        {
          provide: getRepositoryToken(WorkingTimeEntity),
          useValue: Repository
        }
      ]
    })
      .overrideProvider(WorkingTimeRepository)
      .useValue(workingTimeService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  describe('/POST working-time', () => {
    it(`Should create a working-time`, () => {
      const fixture: WorkingTimePayload = {
        date: '2020-10-17T16:10:20.290Z',
        hours: 2
      }
      return request(app.getHttpServer())
        .post('/working-time')
        .send(fixture)
        .expect(201)
        .expect({
          status: 201,
          data: {
            id: 1,
            workDate: fixture.date,
            timeWorked: fixture.hours,
            isPayed: false
          },
        });
    });

    it(`Should return a 403 if no payload`, () => {
      return request(app.getHttpServer())
        .post('/working-time')
        .expect(403)
        .expect({
          statusCode: 403,
          message: "No hours provided,No date provided"
        });
    });
  })

  afterAll(async () => {
    await app.close();
  });
});
