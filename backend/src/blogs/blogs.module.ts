import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Blog } from 'src/users/entities/blog.entity'
import { BlogsController } from './blogs.controller'
import { BlogsService } from './blogs.service'
import { JwtModule } from '@nestjs/jwt'
import { AuthenticationGuard } from 'src/guards/authentication.guard'

@Module({
  imports: [
    TypeOrmModule.forFeature([Blog]),
    JwtModule.register({
      secretOrPrivateKey: 'secret12356789',
    }),
  ],
  controllers: [BlogsController],
  providers: [BlogsService, AuthenticationGuard],
})
export class BlogsModule {}
