import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Content } from '../content.entity';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private contentsRepository: Repository<Content>,
  ) {}

  findAll(): Promise<Content[]> {
    return this.contentsRepository.find();
  }

  findOne(id: string): Promise<Content> {
    return this.contentsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.contentsRepository.delete(id);
  }

  async insert(content: Content) {
    await this.contentsRepository.insert(content);
  }
}
