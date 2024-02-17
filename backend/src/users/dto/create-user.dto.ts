import { IsEmail, IsString, IsNotEmpty, Validate } from 'class-validator'
import {
  WhitespaceConstraint,
  IsNaN,
} from 'src/customValidators/customValidators'

export class CreateUserDto {
  @IsEmail()
  email: string

  @IsString()
  @IsNotEmpty()
  @Validate(WhitespaceConstraint)
  password: string

  @IsString()
  @IsNotEmpty()
  @Validate(WhitespaceConstraint)
  @Validate(IsNaN)
  name: string
}
