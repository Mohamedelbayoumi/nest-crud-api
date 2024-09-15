import { Controller, Post, Body } from '@nestjs/common'

import { AuthService } from './auth.services'

@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/login')
    async signIn(@Body() email: string, password: string) {
        const accessToken = await this.authService.signIn(email, password)
        return { accessToken }
    }
}