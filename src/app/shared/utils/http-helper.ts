import { Response } from 'express'

import { AppError, Messages, Result } from '@/app/shared/utils'

export const ok = (response: Response, result: Result<unknown>) => {
  return response.status(200).json(result)
}

export const notOk = (response: Response, result: Result<unknown>) => {
  return response.status(result.code as number).json(result)
}

export const forbidden = (response: Response) => {
  return response
    .status(403)
    .json(
      Result.error(
        403,
        new AppError('handle -> AuthMiddleware', Messages.ACCESS_DENIED, []),
      ),
    )
}

export const notFound = (response: Response, message: string) => {
  return response
    .status(404)
    .json(Result.error(404, new AppError('', message, [])))
}

export const serverError = (
  response: Response,
  process: string,
  error: Error,
) => {
  return response.status(500).json(
    Result.error(
      500,
      new AppError(process, Messages.APPLICATION_ERROR, [
        { name: 'stack', description: error?.stack ?? '' },
        { name: 'message', description: error?.message ?? '' },
      ]),
    ),
  )
}

export const rateLimit = (response: Response, process: string) => {
  return response
    .status(429)
    .json(
      Result.error(
        429,
        new AppError(process, Messages.RATE_LIMIT_EXCEEDED, []),
      ),
    )
}
