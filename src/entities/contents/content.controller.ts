import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { ContentService } from './content.service';
import { Content } from '../content.entity';

@Controller('/contents')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}
  @Get()
  async findAll(): Promise<string> {
    return this.contentService.findAll().then(contents => JSON.stringify(contents));
  }
  @Post()
  async insert(content: Content): Promise<void> {
    return this.contentService.insert(content);
  }
}
