import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GoogleplaceService } from './../googleplace/googleplace.service';
import { JenosizeController } from './jenosize.controller';
import { JenosizeService } from './jenosize.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'config.env',
    }),
    HttpModule
  ],
  controllers: [JenosizeController],
  providers: [JenosizeService,GoogleplaceService]
})
export class JenosizeModule { }
