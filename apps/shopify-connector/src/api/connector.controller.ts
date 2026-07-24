import { Controller, Get } from '@nestjs/common'

@Controller()
export class ConnectorController {
  @Get('health')
  healthCheck() {
    return { status: 'ok', service: 'shopify-connector' }
  }
}
