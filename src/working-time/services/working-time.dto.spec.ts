import { WorkingTimeEntity } from '../entity/working-time.entity';
import dayjs from 'dayjs';
import { WorkingTimeDto } from './working-time.dto';

describe('WorkingTime DTO specification', () => {

  it('Should return the correct status', () => {
    // Given
    const fakeWorkingTimeEntity: WorkingTimeEntity = {
      id: 1,
      workDate: dayjs(),
      timeWorked: 6,
      isPayed: false
    }
    const expectedStatus = 201

    const workingTimeDto = new WorkingTimeDto()

    // When
    const render = workingTimeDto.render(201, fakeWorkingTimeEntity)

    // Then
    expect(render.status).toEqual(expectedStatus)
  })

  it('Should map one entity with all fields', () => {
    // Given
    const fakeWorkingTimeEntity: WorkingTimeEntity = {
      id: 1,
      workDate: dayjs(),
      timeWorked: 6,
      isPayed: false
    }
    const expectedRessource = {
      status: 201,
      data: {
        id: 1,
        workDate: dayjs().toString(),
        timeWorked: 6,
        isPayed: false
      }
    }

    const workingTimeDto = new WorkingTimeDto()

    // When
    const render = workingTimeDto.render(201, fakeWorkingTimeEntity)

    // Then
    expect(render).toStrictEqual(expectedRessource)
  })

  it('Should map multiple entities with all fields', () => {
    // Given
    const fakeWorkingTimeEntity: WorkingTimeEntity[] = [{
      id: 1,
      workDate: dayjs(),
      timeWorked: 6,
      isPayed: false
    }, {
      id: 2,
      workDate: dayjs(),
      timeWorked: 6,
      isPayed: true
    }]
    const expectedRessource = {
      status: 201,
      data: [{
        id: 1,
        workDate: dayjs().toString(),
        timeWorked: 6,
        isPayed: false
      }, {
        id: 2,
        workDate: dayjs().toString(),
        timeWorked: 6,
        isPayed: true
      }]
    }

    const workingTimeDto = new WorkingTimeDto()

    // When
    const render = workingTimeDto.render(201, fakeWorkingTimeEntity)

    // Then
    expect(render).toStrictEqual(expectedRessource)
  })
})
