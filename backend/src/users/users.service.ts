import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ResetPasswordDTO } from './dto/reset-password.dto';
import { ForgotPasswordDTO } from './dto/forgot-password.dto';
import { SignInUserDTO } from './dto/singin-user-dto';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    return `This action adds a new user with the data: ${createUserDto}`;
  }

  signIn(signInUserDTO: SignInUserDTO) {
    return `This action returns the user with email: ${signInUserDTO.email} and password: ${signInUserDTO.password}`;
  }

  getUserById(id: number) {
    return `This action returns a #${id} user`;
  }

  forgotPassword(forgotPasswordDTO: ForgotPasswordDTO){
    return `This action returns the user with email #${forgotPasswordDTO.email}`
  }

  resetPassword(id: number, resetPasswordDTO: ResetPasswordDTO) {
    return `This action resets the password for the #${id} user with new passowrd: ${resetPasswordDTO.password}`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

}
