import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(nbRefresh: number): { text: string, date: number, refresh: number } {
    return {
      text: 'Hello World!',
      date: new Date().getTime(),
      refresh: nbRefresh
    };
  }
}
