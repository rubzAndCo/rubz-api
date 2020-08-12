import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Clips } from './clips';
import fs from "fs";
import { join } from "path";

@Injectable()
export class ClipsService {
  myClips: Clips[] = [
    {
      id: 1,
      artists: {
        name: 'Gazo',
        city: 'Paris',
        zipCode: 75014,
        featuring: {
          name: 'Freeze Corleone'
        }
      },
      name: 'Drill FR 4'
    },
    {
      id: 2,
      artists: {
        name: 'Aminé',
        city: 'Portland',
        zipCode: 97203,
        featuring: null
      },
      name: 'Cant tell'
    }
  ]

  find(id: number): Clips | null {
    return this.myClips.find(clip => clip.id === id) || null
  }

  findAll(): Clips[] | null {
    return this.myClips.length > 0 ? this.myClips : null
  }

  create(): void {
    this.myClips.push({
      id: this.myClips.length + 1,
        artists: {
          name: 'Aminé',
          city: 'Portland',
          zipCode: 97203,
          featuring: null
    },
      name: 'Cant tell'
    })
  }

  render() {
    return fs.readFile(join(__dirname, '../..', 'assets/13-block-tieks-feat-niska-clip-officiel.mp4'), 'utf8', (err, data) => {
      if (err) throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Clip introuvable',
      }, HttpStatus.FORBIDDEN);

      return data
    })
  }
}
