import { Table, Model, Column, BelongsToMany, ForeignKey } from 'sequelize-typescript'

import { Book } from '../books/book.model'

@Table({ timestamps: false })
export class Author extends Model {

    @Column({ allowNull: false })
    first_name: string

    @Column({ allowNull: false })
    last_name: string

    @Column({ unique: true, allowNull: false })
    phone_number: string

    @Column({ unique: true, allowNull: false })
    email: string

    @Column({ allowNull: false })
    password: string

    @Column
    description: string

    @BelongsToMany(() => Book, () => BookAuthor)
    books: Book[]

}

export @Table({ timestamps: false })
class BookAuthor extends Model {

    @ForeignKey(() => Author)
    @Column
    authorId: number

    @ForeignKey(() => Book)
    @Column
    bookId: number
}