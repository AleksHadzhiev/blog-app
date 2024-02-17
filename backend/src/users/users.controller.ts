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
import { AuthService } from 'src/auth/auth/auth.service'
import { CreateUserDto } from './dto/create-user.dto'
import { SignInUserDTO } from './dto/singin-user-dto'
import { ForgotPasswordDTO } from './dto/forgot-password.dto'
import { ResetPasswordDTO } from './dto/reset-password.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('/register')
  @UsePipes(new ValidationPipe())
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto)
  }

  @Post('/signin')
  @UsePipes(new ValidationPipe())
  signIn(@Body() userDTO: SignInUserDTO) {
    return this.authService.login(userDTO)
  }

  @Get(':id')
  getByUserId(@Param('id') id: string) {
    return this.usersService.getUserById(+id)
  }

  @Post('/forgot-password')
  @UsePipes(new ValidationPipe())
  forgotPassword(@Body() forgotPasswordDTO: ForgotPasswordDTO) {
    return this.usersService.forgotPassword(forgotPasswordDTO)
  }

  @Put('/reset-password/:id')
  @UsePipes(new ValidationPipe())
  resetPassword(
    @Param('id') id: string,
    @Body() resetPasswordDTO: ResetPasswordDTO,
  ) {
    return this.usersService.resetPassword(+id, resetPasswordDTO)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id)
  }

  @Get('/confirm/:token')
  confirmUser(@Param('token') token: string) {
    console.log('IN ENDPOINT')
    return this.usersService.confirm(token)
  }
}
