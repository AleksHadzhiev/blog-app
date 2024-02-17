import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/mail/mail.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SignInUserDTO } from 'src/users/dto/singin-user-dto';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService,
        private readonly mailService: MailService
    ) {}

    private async validate(userData: SignInUserDTO): Promise<User>{
        return await this.userService.signIn(userData)
    }

    public async login(user: SignInUserDTO): Promise< any | { status: number }>{
        return this.validate(user).then((userData)=>{
            if(!userData){
                return {status: 404};
            }
            let payload = `${userData.name}${userData.id}`;
            const accessToken = this.jwtService.sign(payload)

            return {
                expired_in: 3600,
                access_token: accessToken,
                user_id: payload,
                status:200
            }
        })
    }

    public async register(userDTO:CreateUserDto): Promise<any>{
        const user: Promise<User | null> = this.userService.create(userDTO)
        if (user !== null){
            const token = crypto.createHmac('sha256',userDTO.password).digest('hex');
            await this.mailService.sendUserConfirmation(userDTO, token)
        }
        return `This action adds a new user with the data. Email: ${(await user).email}`;
    } 
}
