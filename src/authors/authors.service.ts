import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'

import { Author } from './author.model'
import { IAuthor } from './author.interface'

@Injectable()
export class AuthorService {
    constructor(
        @InjectModel(Author)
        private authorModel: typeof Author
    ) { }

    async findAll(): Promise<Author[]> {
        return await this.authorModel.findAll()
    }

    async findOne(email: string): Promise<Author> {
        return this.authorModel.findOne({
            where: {
                email
            }
        })
    }

    async create(authorData: IAuthor): Promise<void> {

        try {
            await this.authorModel.create({
                first_name: authorData.firstName,
                last_name: authorData.lastName,
                description: authorData.description,
                phone_number: authorData.phoneNumber,
                email: authorData.email,
                password: authorData.password
            })
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }
}