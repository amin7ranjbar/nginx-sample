import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getBye(): string {
    return 'Bye World!';
  }
}
