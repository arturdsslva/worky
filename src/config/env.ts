import 'dotenv/config'
import { AppError, Messages } from '@/shared/utils'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z
    .union([
      z.literal('development'),
      z.literal('production'),
      z.literal('test'),
    ])
    .default('development'),
  PORT: z.coerce.number().default(3333),
  API_URL: z.string().default('http://localhost:3333'),
  DB_TYPE: z.literal('postgres').default('postgres'),
  DB_HOST: z.string().default('localhost'),
  DB_PORT: z.coerce.number().default(5432),
  DB_SCHEMA: z.string().default('public'),
  DB_NAME: z.string().default('postgres'),
  DB_USER: z.string().default('postgres'),
  DB_PASS: z.string().default('postgres'),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  throw new AppError('handle -> env', Messages.INVALID_ENVIRONMENT, [
    {
      name: _env.error.errors[0].code,
      description: _env.error.errors[0].path.join(' -> '),
    },
  ])
}

export const env = _env.data
