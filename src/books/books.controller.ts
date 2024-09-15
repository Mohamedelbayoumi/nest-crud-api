import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common'

import { BookService } from './books.service'
import { CreateBookDto } from './dto/create-book-dto'

@Controller('/books')
export class Bookcontroller {
    constructor(private bookService: BookService) { }

    @Get()
    async getBooks() {
        return this.bookService.findAll()
    }

    @Get('/:id')
    async getBookById(@Param('id', ParseIntPipe) id: number) {
        return this.bookService.findBookById(id)
    }

    @Post()
    async addBook(@Body() createBookDto: CreateBookDto) {
        await this.bookService.createBook(createBookDto)
        return "Book Created"
    }

}