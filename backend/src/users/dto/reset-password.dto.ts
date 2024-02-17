import { IsNotEmpty, IsString, Validate } from 'class-validator'
import { WhitespaceConstraint } from 'src/customValidators/customValidators'

export class ResetPasswordDTO {
  @IsString()
  @IsNotEmpty()
  @Validate(WhitespaceConstraint)
  password: string
}
