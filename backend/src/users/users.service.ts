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
    console.log((await savedUser).id)
    return `This action adds a new user with the data: ${user}`;
  }

  async signIn(signInUserDTO: SignInUserDTO) {
    let user:  Promise<User | null> = this.usersRepository.findOneBy(signInUserDTO)
    console.log((await user).id)
    return `This action returns the user with email: ${(await user).email} and password: ${(await user).password}`;
  }

  async getUserById(id: number) {
    let user:  Promise<User | null> = this.usersRepository.findOneBy({id})
    return `This action returns a the user: ${user} for id: ${id}`;
  }

  async forgotPassword(forgotPasswordDTO: ForgotPasswordDTO){
    let user: Promise<User | null> = this.usersRepository.findOneBy(forgotPasswordDTO)
    return `This action returns the user with email #${(await user).email}`
  }

  async resetPassword(id: number, resetPasswordDTO: ResetPasswordDTO) {
    let user: Promise<User | null> = this.usersRepository.findOneBy({id})
    ;(await user).password == resetPasswordDTO.password
    let userWithNewPassword : User = this.usersRepository.merge(await user)
    this.usersRepository.save(userWithNewPassword)
    return `This action resets the password for the #${id} user with new passowrd: ${resetPasswordDTO.password}`;
  }

  remove(id: number) {
    this.usersRepository.delete(id)
    return `This action removes a #${id} user`;
  }

}
