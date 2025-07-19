import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedCommand {
  async run() {
    // TODO: Implement database seeding logic
    console.log('Seeding database...');
  }
} 