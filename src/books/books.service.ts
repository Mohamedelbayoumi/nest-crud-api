import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'

import { Book } from './book.model'
import { IBook } from './book.interface'
@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book)
        private bookModel: typeof Book
    ) { }

    async findAll(): Promise<Book[]> {
        return this.bookModel.findAll({
            attributes: ["title", "price", "id"]
        })
    }

    async findBookById(id: number): Promise<Book> {
        return this.bookModel.findByPk(id)
    }

    async createBook(bookData: IBook): Promise<void> {
        const authorId = 1

        const book = await this.bookModel.create({
            title: bookData.title,
            description: bookData.description,
            price: bookData.price
        })

        book.$add('authors', authorId)
    }

}