import { Controller, Get, UsePipes, ValidationPipe, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SignInUserDTO } from './dto/singin-user-dto';
import { ForgotPasswordDTO } from './dto/forgot-password.dto';
import { ResetPasswordDTO } from './dto/update-user.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("/register")
  @UsePipes(new ValidationPipe())
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get("/signin")
  @UsePipes(new ValidationPipe())
  signIn(@Body() userDTO: SignInUserDTO) {
    return this.usersService.findAll();
  }

  @Get(':id')
  getByUserId(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch('/forgot-password')
  @UsePipes(new ValidationPipe())
  forgotPassword(@Body() forgotPasswordDTO: ForgotPasswordDTO) {
    return ""
  }

  @Patch('/reset-password')
  @UsePipes(new ValidationPipe())
  resetPassword(resetPasswordDTO: ResetPasswordDTO){

  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
