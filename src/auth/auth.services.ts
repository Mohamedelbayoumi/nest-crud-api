import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { compare } from 'bcrypt'

import { AuthorService } from '../authors/authors.service'

@Injectable()
export class AuthService {
    constructor(
        private authorService: AuthorService,
        private jwtService: JwtService
    ) { }

    async signIn(email: string, password: string) {

        const author = await this.authorService.findOne(email)

        if (!author) {
            throw new NotFoundException("User Not Found")
        }

        const comparingResult = await compare(password, author.password)

        if (!comparingResult) {
            throw new UnauthorizedException("Incorrect Password")
        }

        return await this.jwtService.signAsync({ sub: 1111 })
    }
}