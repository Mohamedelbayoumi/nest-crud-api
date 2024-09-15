import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize'
import { Sequelize } from 'sequelize-typescript'
import { ConfigModule } from '@nestjs/config'

import { AuthorModule } from './authors/authors.module'
import { BookModule } from './books/book.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        username: "root",
        password: "mentafi",
        host: "localhost",
        port: 3000,
        dialect: 'mysql',
        database: "nest_library_system",
        autoLoadModels: true,
        synchronize: true
      })
    }),
    ConfigModule.forRoot(),
    AuthorModule, BookModule, AuthModule
  ]
})
export class AppModule {
  constructor(private sequelize: Sequelize) {
    sequelize.authenticate()
      .then(() => {
        console.log('Database Connection has been established successfully.');
      })
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      });
  }
}
