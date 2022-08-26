import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getUser(): string {
    return this.configService.get('SECRET1');
  }
  postUser(): string {
    return 'Test!!';
  }
}
