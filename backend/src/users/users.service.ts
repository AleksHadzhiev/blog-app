import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ResetPasswordDTO } from './dto/reset-password.dto';
import { ForgotPasswordDTO } from './dto/forgot-password.dto';
import { SignInUserDTO } from './dto/singin-user-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    let user: User = this.usersRepository.create(createUserDto)
    let savedUser: Promise<User | null> = this.usersRepository.save(user)
    return `This action adds a new user with the data: ${savedUser}`;
  }

  async signIn(signInUserDTO: SignInUserDTO) {
    let user:  Promise<User | null> = this.usersRepository.findOneBy(signInUserDTO)
    if (await user !== null){
      return `This action returns the user with email: ${(await user).email} and password: ${(await user).password}`;
    }
    return `The user with such credentials does not exist`;
  }

  async getUserById(id: number) {
    let user:  Promise<User | null> = this.usersRepository.findOneBy({id})
    if ( await user !== null) {
      return `This action returns a the user: ${user} for id: ${id}`;
    }
    return `User with id: ${id} does not exist`
  }

  async forgotPassword(forgotPasswordDTO: ForgotPasswordDTO){
    let user: Promise<User | null> = this.usersRepository.findOneBy(forgotPasswordDTO)
    if (await user !== null){
      return `This action returns the user with email #${(await user).email}`
    }
    return `User with such email does not exist`
  }

  async resetPassword(id: number, resetPasswordDTO: ResetPasswordDTO) {
    let user: Promise<User | null> = this.usersRepository.findOneBy({id})
    if (await user !== null){
      ;(await user).password == resetPasswordDTO.password
      let userWithNewPassword : User = this.usersRepository.merge(await user)
      this.usersRepository.save(userWithNewPassword)
      return `This action resets the password for the #${id} user with new passowrd: ${resetPasswordDTO.password}`;
    }
    return `User with id: ${id} does not exist`
  }

  remove(id: number) {
    this.usersRepository.delete(id)
    return `This action removes a #${id} user`;
  }

}
