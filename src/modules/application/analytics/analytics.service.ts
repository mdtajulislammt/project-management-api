import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsService {
  async getReport() {
    // TODO: Implement analytics report
    return { report: 'mocked_report' };
  }
} 