import { HttpModule, Module } from '@nestjs/common';
import { GoogleplaceService } from './../googleplace/googleplace.service';
import { JenosizeController } from './jenosize.controller';
import { JenosizeService } from './jenosize.service';

@Module({
  imports: [HttpModule],
  controllers: [JenosizeController],
  providers: [JenosizeService,GoogleplaceService]
})
export class JenosizeModule { }
