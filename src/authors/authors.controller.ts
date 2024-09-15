import { Controller, Get, Post, Body, Param } from '@nestjs/common'

import { AuthorService } from './authors.service'
import { CreateAuthorDto } from './dto/create-author.dto'

@Controller('/authors')
export class AuthorController {
    constructor(private authorService: AuthorService) { }

    @Get()
    async getAllAuthors() {
        return this.authorService.findAll()
    }

    @Post()
    async addAutor(@Body() createAuthorDto: CreateAuthorDto) {
        await this.authorService.create(createAuthorDto)
        return "Author Created"
    }
}