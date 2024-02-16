import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SignInUserDTO } from 'src/users/dto/singin-user-dto';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
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

    public async register(user:CreateUserDto): Promise<any>{
        return this.userService.create(user)
    } 
}
