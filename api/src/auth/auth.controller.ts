import { Body, Controller, HttpCode, Post } from '@nestjs/common';

@Controller('/api/auth')
export class AuthController {
  @Post()
  @HttpCode(200)
  signIn(
    @Body('login') login: string,
    @Body('password') password: string
  ) {
    if (login === 'admin' && password === 'admin') {
      return {
        success: true,
        message: 'Success login',
      };
    } else {
      return {
        success: false,
        message: 'Invalid login',
      };
    }
  }
}
