import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ResetPasswordDTO } from './dto/reset-password.dto';
import { ForgotPasswordDTO } from './dto/forgot-password.dto';
import { SignInUserDTO } from './dto/singin-user-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as crypto from 'crypto';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly emailService: MailService
  ) {}

  async create(createUserDto: CreateUserDto) {
    let user: User = this.usersRepository.create(createUserDto)
    let savedUser: Promise<User | null> = this.usersRepository.save(user)
    return savedUser
  }

  async signIn(signInUserDTO: SignInUserDTO) {
    let encryptedPassword =  crypto.createHmac('sha256',signInUserDTO.password).digest('hex')
    let user:  Promise<User | null> = this.usersRepository.findOneByOrFail({email:signInUserDTO.email, password: encryptedPassword})
    return user
  }

  async getUserById(id: number) {
    let user:  Promise<User | null> = this.usersRepository.findOneBy({id})
    if ( await user !== null) {
      return `This action returns a the user: ${user} for id: ${id}`;
    }
    return `User with id: ${id} does not exist`
  }

  async forgotPassword(forgotPasswordDTO: ForgotPasswordDTO){
    let user: Promise<User | null> = this.usersRepository.findOneBy({email: forgotPasswordDTO.email})
    if (await user !== null){
      // Apply when frontend is implemented :)
      // const token = crypto.createHmac('sha256',(await user).password).digest('hex');
      // await this.emailService.sendForgotPassword(forgotPasswordDTO, token) 
      return `This action returns the user with email #${(await user).email}`
    }
    return `User with such email does not exist`
  }

  async resetPassword(id: number, resetPasswordDTO: ResetPasswordDTO) {
    let user: Promise<User | null> = this.usersRepository.findOneBy({id})
    if (await user !== null){
      ;(await user).password == resetPasswordDTO.password
      await this.updateUserInDB(await user)
      return `This action resets the password for the #${id} user with new passowrd: ${resetPasswordDTO.password}`;
    }
    return `User with id: ${id} does not exist`
  }

  remove(id: number) {
    this.usersRepository.delete(id)
    return `This action removes a #${id} user`;
  }

  async confirm(token: string){
    let user: Promise<User | null> = this.usersRepository.findOneBy({password: token})
    console.log(user)
    if (user !== null){
      console.log('CONFIRMED')
      ;(await user).isVerified = true
      await this.updateUserInDB(await user)
      return "You have been confirmed!"
    }
    this.usersRepository.delete({password: token})
  }

  private async updateUserInDB(user:User) {
    let updatedUser : User = this.usersRepository.merge(await user)
    this.usersRepository.save(updatedUser)
  }
}
