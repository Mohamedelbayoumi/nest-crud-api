import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { Bookcontroller } from './books.controller'
import { BookService } from './books.service'
import { Book } from './book.model'

@Module({
    imports: [SequelizeModule.forFeature([Book])],
    controllers: [Bookcontroller],
    providers: [BookService]
})
export class BookModule { }