import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClipsController } from './clips/clips.controller';
import { ClipsService } from './clips/clips.service';
import { YtdlService } from './ytdl/ytdl.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets'),
      exclude: ['/api*'],
    })
  ],
  controllers: [AppController, ClipsController],
  providers: [AppService, ClipsService, YtdlService],
})
export class AppModule {}
