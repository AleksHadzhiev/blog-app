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
  } from '@nestjs/common'
import { CreateBlogDTO } from 'src/users/dto/create-blog.dto';
import { EditBlogDTO } from 'src/users/dto/edit-blog.dto';
import { BlogsService } from './blogs.service';
  
  @Controller('blogs')
  export class BlogsController {
    constructor(
        private readonly blogsService: BlogsService
    ) {}
  
    @Post('')
    @UsePipes(new ValidationPipe())
    create(@Body() createBlogDTO : CreateBlogDTO) {
      return  this.blogsService.create(createBlogDTO)
    }
  
    @Get(':id')
    @UsePipes(new ValidationPipe())
    getblog(@Param('id') id: string) {
      return  this.blogsService.getABlog(+id)
    }
  
    @Get('/get/by/user/:userId')
    getByUserId(@Param('userId') id: string) {
      console.log("IN MANS")
      return this.blogsService.getUserById(+id)
    }
  
    @Put(':id')
    @UsePipes(new ValidationPipe())
    editBlog(
      @Param('id') id: string,
      @Body() editBlogDTO : EditBlogDTO
    ) {
      return  this.blogsService.editBlog(+id, editBlogDTO)
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return  this.blogsService.remove(+id)
    }
  
  }
  