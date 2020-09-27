import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/api/auth/guards/local-auth.guard';
import { AuthService } from 'src/api/services/auth/auth.service';

@Controller('login')
export class AuthController {

    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post()
    async login(@Request() req) {
        return this.authService.generateToken(req.user);
    }
}
