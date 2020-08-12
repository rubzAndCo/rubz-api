import { Injectable } from '@nestjs/common';
import ytdl from 'ytdl-core';

@Injectable()
export class YtdlService {

  async getInfo(videoID?: string): Promise<any> {
    const id = videoID || 'sfUe7nbSOWQ'

    return await ytdl.getInfo(id)
  }
}
