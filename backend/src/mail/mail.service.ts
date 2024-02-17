import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { ForgotPasswordDTO } from 'src/users/dto/forgot-password.dto'

@Injectable()
export class MailService {
  constructor(private mailService: MailerService) {}

  async sendUserConfirmation(user: CreateUserDto, token: string) {
    const url = `http://localhost:3000/users/confirm/${token}`
    const to = user.email
    const subject = 'Welcome to blogster. Confirm your email'
    const template = './confirmation'
    const context = {
      name: user.name,
      url: url,
    }
    await this.sendEmail(to, subject, template, context)
  }

  async sendForgotPassword(user: ForgotPasswordDTO, token: string) {
    const url = `http://localhost:3000/users/confirm/${token}`
    const to = user.email
    const subject = 'Blogster suppor - forgot password.'
    const template = './forgot-password'
    const context = {
      email: user.email,
      url: url,
    }
    await this.sendEmail(to, subject, template, context)
  }

  private async sendEmail(
    sendTo: string,
    subject: string,
    template: string,
    _context: Object,
  ) {
    await this.mailService.sendMail({
      to: sendTo,
      subject: subject,
      template: template,
      context: _context,
    })
  }
}
