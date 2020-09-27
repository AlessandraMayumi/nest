import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/api/auth/guards/local-auth.guard';

@Controller('login')
export class AuthController {

    @UseGuards(LocalAuthGuard)
    @Post()
    async login(@Request() req) {
        return req.user;
    }
}
