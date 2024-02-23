import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Blog } from 'src/users/entities/blog.entity'
import { CreateBlogDTO } from 'src/users/dto/create-blog.dto'
import { EditBlogDTO } from 'src/users/dto/edit-blog.dto'

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog)
    private blogsRepository: Repository<Blog>,
  ) {}

  async create(createBlogDto: CreateBlogDTO) {
    console.log(createBlogDto)
    let blog: Blog = this.blogsRepository.create(createBlogDto)
    let savedBlog: Promise<Blog | null> = this.blogsRepository.save(blog)
    return savedBlog
  }

  async editBlog( id:number,editBlogDTO : EditBlogDTO) {
    let blog: Promise<Blog | null> = this.blogsRepository.findOneBy({ id: id })
    ;(await blog).title=editBlogDTO.title
    ;(await blog).description=editBlogDTO.description
    let savedBlog: Promise<Blog | null> = this.blogsRepository.save(await blog)
    console.log(`${(await savedBlog).description} and ${(await savedBlog).title}`)
    return savedBlog
  }

  async getABlog(id: number){
    let blog: Promise<Blog | null> = this.blogsRepository.findOneBy({ id: id })
    if ((await blog) !== null) {
      return blog
    }
    return `Blog with id: ${id} does not exist`
  }

  async getUserById(userdId: number) {
    console.log(userdId)
    let blog: Promise<Blog | null> = this.blogsRepository.findOneBy({userId: userdId})
    if ((await blog) !== null) {
      return blog
    }
    return `Blog with id: ${userdId} does not exist`
  }

  remove(id: number) {
    this.blogsRepository.delete(id)
    return `This action removes a ${id} blog`
  }
}
