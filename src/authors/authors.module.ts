import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { AuthorController } from './authors.controller'
import { AuthorService } from './authors.service'
import { Author, BookAuthor } from './author.model'

@Module({
    imports: [SequelizeModule.forFeature([Author, BookAuthor])],
    controllers: [AuthorController],
    providers: [AuthorService],
    exports: [AuthorService]
})
export class AuthorModule { }