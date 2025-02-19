import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { ERole, ERank } from '@/core/enums'
import { IUser } from '@/data/models/'

@Entity('users')
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  _id!: string

  @Column('varchar')
  name!: string

  @Column('varchar')
  email!: string

  @Column('varchar')
  password!: string

  @Column('enum', { enum: ERole })
  role!: ERole

  @Column('enum', { enum: ERank })
  rank!: ERank

  @Column('boolean')
  active!: boolean

  @Column('varchar', { nullable: true })
  phone?: string | undefined

  @Column('varchar', { nullable: true })
  avatar?: string | undefined

  @CreateDateColumn()
  created_at!: Date

  @UpdateDateColumn()
  updated_at!: Date
}
