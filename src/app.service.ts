import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getInfo() {
    return {
      name: this.configService.get<string>(
        'APP_NAME',
        'NestJS Application',
      ),
      message: 'La aplicación está funcionando',
      group: this.configService.get<string>('CLASS_GROUP', 'Sin grupo'),
    };
  }
}