import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query, UsePipes } from '@nestjs/common';
import { Clips } from './clips'
import { ClipsService } from './clips.service';
import { CreateClipsDto } from './DTO/create-clips.dto';
import { YtdlService } from '../ytdl/ytdl.service';
import { JoiValidationPipe } from './validation/joi-validation.pipe';
import { ClipsSchema } from './validation/clips-schema';

@Controller('clips')
export class ClipsController {

  constructor(
    private clipsService: ClipsService,
    private ytdlService: YtdlService) {}

  @Get()
  getAllClips(): Clips[] {
    const clips = this.clipsService.findAll()

    if (!clips) throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'Aucun clips trouvées',
    }, HttpStatus.FORBIDDEN)

    return clips
  }

  @Get('info')
  @UsePipes(new JoiValidationPipe(ClipsSchema))
  async getInfoClip(@Query() query): Promise<any> {
    try {
      return await this.ytdlService.getInfo(query.id)
    } catch(err) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: err.message,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('raw')
  getRawClip(@Param() params): void {
    return this.clipsService.render()
  }

  @Get(':id')
  getOneClip(@Param() params): Clips {
    const clip = this.clipsService.find(parseInt(params.id))

    if (!clip) throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'Aucun clips trouvées',
    }, HttpStatus.FORBIDDEN);

    return clip
  }



  @Post()
  createClip(@Body() clip: CreateClipsDto): void {
    this.clipsService.create()
  }

}
