import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Observable } from 'rxjs'

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest()
    const authorizationHeader = request.headers.authorization
    if (!authorizationHeader) {
      throw new UnauthorizedException('Authorization header is missing')
    }

    const token = authorizationHeader.split(' ')[1]
    if (!token) {
      throw new UnauthorizedException()
    }
    try {
      request.user = this.jwtService.verify(token)
    } catch (error) {
      console.log(error)
      throw new UnauthorizedException()
    }
    return true
  }
}
