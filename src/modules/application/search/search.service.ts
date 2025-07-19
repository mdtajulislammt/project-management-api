import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchService {
  async search(query: string) {
    // TODO: Implement search logic
    return { results: [] };
  }
} 