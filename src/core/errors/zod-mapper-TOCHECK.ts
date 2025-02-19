import { ZodError } from 'zod'
import { Messages, Result } from '../utils'
import { AppError } from '@/core/errors'

export const zodErrorMapper = (
  process: string,
  error: ZodError,
): Result<unknown> => {
  return Result.error(
    400,
    new AppError(
      process,
      Messages.INVALID_REQUEST,
      error.issues.map((issue) => {
        const path = issue.path.filter(
          (arg) => typeof arg === 'string',
        ) as string[]

        return {
          name: path.reduce<string>(
            (acc, name) => (acc ? `${acc}/${name}` : name),
            '',
          ),
          description: issue.message,
        }
      }),
    ),
  )
}
