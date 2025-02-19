import { DataSource } from 'typeorm'
import { env } from '@/config/env'

export const dataSource: DataSource = new DataSource({
  type: env.DB_TYPE,
  host: env.DB_HOST,
  port: env.DB_PORT,
  schema: env.DB_SCHEMA,
  database: env.DB_NAME,
  username: env.DB_USER,
  password: env.DB_PASS,
  entities: ['path/to/entities/*.ts'],
  migrations: ['path/to/migrations/*.ts'],
  synchronize: false,
})
