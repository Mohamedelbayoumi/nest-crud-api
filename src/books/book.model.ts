import { Table, Model, Column, DataType, BelongsToMany, AllowNull } from 'sequelize-typescript'

import { Author, BookAuthor } from '../authors/author.model'

@Table({ timestamps: false })
export class Book extends Model {

    @AllowNull(false)
    @Column({ allowNull: false })
    title: string

    @AllowNull(false)
    @Column(DataType.DOUBLE)
    price: number

    @AllowNull(false)
    @Column
    description: string

    @BelongsToMany(() => Author, () => BookAuthor)
    authors: Author[]
}