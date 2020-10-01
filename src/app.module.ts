import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { JenosizeModule } from './jenosize/jenosize.module';

@Module({
  imports: [JenosizeModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
