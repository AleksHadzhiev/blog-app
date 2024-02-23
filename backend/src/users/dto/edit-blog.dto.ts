import { IsString, IsNotEmpty, Validate } from 'class-validator'
import {
  WhitespaceConstraint,
} from 'src/customValidators/customValidators'

export class EditBlogDTO {

    @IsString()
    @IsNotEmpty()
    @Validate(WhitespaceConstraint)
    title: string

    @IsString()
    @IsNotEmpty()
    @Validate(WhitespaceConstraint)
    description: string
}
