import {IsEmail, IsString, IsNotEmpty, Validate} from 'class-validator'
import { WhitespaceConstraint, IsNaN } from 'src/customValidators/customValidators';

export class SignInUserDTO {
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Validate(WhitespaceConstraint)
    password: string;
}
