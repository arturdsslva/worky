import { User } from '@/domain/entities'
export interface UserRepository {
  create(user: User): Promise<User>
}
