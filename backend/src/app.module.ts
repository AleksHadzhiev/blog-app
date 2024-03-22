import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './users/entities/user.entity'
import { MailModule } from './mail/mail.module'
import { BlogsModule } from './blogs/blogs.module'
import { HttpModule } from '@nestjs/axios'
@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:5000', // Your backend base URL
      timeout: 5000, // Request timeout in milliseconds
    }),
    UsersModule,
    BlogsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [User],
      synchronize: true,
      autoLoadEntities: true,
    }),
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
