import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return {
      sss: 'ffff',
    };
  }

  signin() {
    return 'ddd';
  }
}
