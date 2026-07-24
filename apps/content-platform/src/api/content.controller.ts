import { Controller, Get } from '@nestjs/common'

@Controller()
export class ContentController {
  @Get('health')
  healthCheck() {
    return { status: 'ok', service: 'content-platform' }
  }

  @Get('channels')
  listChannels() {
    return { channels: [], message: 'Content Platform V1 — channels endpoint' }
  }

  @Get('videos')
  listVideos() {
    return { videos: [], message: 'Content Platform V1 — videos endpoint' }
  }
}
