import { Module } from '@nestjs/common'
import { ConnectorController } from './api/connector.controller'

@Module({
  controllers: [ConnectorController],
})
export class AppModule {}
