import { IsString, IsNotEmpty, Validate, IsNumber } from 'class-validator'
import { WhitespaceConstraint } from 'src/customValidators/customValidators'

export class CreateBlogDTO {
  @IsString()
  @IsNotEmpty()
  @Validate(WhitespaceConstraint)
  title: string

  @IsString()
  @IsNotEmpty()
  @Validate(WhitespaceConstraint)
  description: string

  @IsNumber()
  userId: number
}
