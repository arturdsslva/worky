import { Repository } from 'typeorm'
import { User } from '@/domain/entities'
import { UserRepository } from '@/domain/repository/user.repository'
import { AppDataSource } from '@/data/datasources'

export class UserRepositoryImp implements UserRepository {
  repository: Repository<User>

  constructor() {
    this.repository = AppDataSource.getRepository(User)
  }

  create(user: User): Promise<User> {
    console.log(`${user}`)

    throw new Error('Method not implemented.')
  }
}
