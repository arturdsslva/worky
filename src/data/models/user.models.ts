import { ERank, ERole } from '@/core/enums'

export interface IUser {
  _id: string
  name: string
  email: string
  password: string
  role: ERole
  rank: ERank
  active: boolean
  phone?: string
  avatar?: string
  created_at: Date
  updated_at: Date
}
