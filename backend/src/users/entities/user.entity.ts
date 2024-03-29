import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm'
import * as crypto from 'crypto'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @BeforeInsert()
  hashPassowrd() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex')
  }
  @Column()
  password: string

  @Column({ default: false })
  isVerified: boolean
}
