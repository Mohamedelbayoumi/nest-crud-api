import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'

import { AuthorModule } from 'src/authors/authors.module'
import { AuthController } from './auth.controllers'
import { AuthService } from './auth.services'

@Module({
    imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get('JWT_SECRET_KEY'),
                signOptions: { expiresIn: '2 days' }
            }),
            inject: [ConfigService]
        }),
        AuthorModule
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule { }