import { Module } from '@nestjs/common'
import { ContentController } from './api/content.controller'

@Module({
  controllers: [ContentController],
})
export class AppModule {}
