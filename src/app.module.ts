import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClipsController } from './clips/clips.controller';
import { ClipsService } from './clips/clips.service';
import { YtdlService } from './ytdl/ytdl.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { WorkingTimeModule } from './working-time/working-time.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkingTimeEntity } from './working-time/entity/working-time.entity';

@Module({
  imports: [
    WorkingTimeModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: `./data/db.sqlite`,
      entities: [WorkingTimeEntity],
      synchronize: true,
    }),
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets'),
      exclude: ['/api*'],
    })
  ],
  controllers: [AppController, ClipsController],
  providers: [ClipsService, YtdlService],
})
export class AppModule {
}
