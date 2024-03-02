import {
  Controller,
  Get,
  UsePipes,
  ValidationPipe,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common'
import { CreateBlogDTO } from 'src/users/dto/create-blog.dto'
import { EditBlogDTO } from 'src/users/dto/edit-blog.dto'
import { BlogsService } from './blogs.service'
import { AuthenticationGuard } from 'src/guards/authentication.guard'

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get('')
  getAll() {
    return this.blogsService.getAll()
  }

  @UseGuards(AuthenticationGuard)
  @Post('')
  @UsePipes(new ValidationPipe())
  create(@Body() createBlogDTO: CreateBlogDTO) {
    return this.blogsService.create(createBlogDTO)
  }

  @Get(':id')
  @UsePipes(new ValidationPipe())
  getblog(@Param('id') id: string) {
    return this.blogsService.getABlog(+id)
  }

  @UseGuards(AuthenticationGuard)
  @Get('/get/by/user/:userId')
  getForUser(@Param('userId') id: string) {
    return this.blogsService.getForUser(+id)
  }

  @UseGuards(AuthenticationGuard)
  @Put(':id')
  @UsePipes(new ValidationPipe())
  editBlog(@Param('id') id: string, @Body() editBlogDTO: EditBlogDTO) {
    return this.blogsService.editBlog(+id, editBlogDTO)
  }

  @UseGuards(AuthenticationGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogsService.remove(+id)
  }
}
