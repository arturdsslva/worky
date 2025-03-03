import { AppError } from '@/core/errors'

export class Result<T> {
  success: boolean
  data?: T
  code?: number
  error?: AppError

  private constructor(sucesso: boolean) {
    this.success = sucesso
  }

  private addError(error: AppError, code: number): void {
    this.error = error
    this.code = code
  }

  private addData(data?: T): void {
    this.data = data
    this.code = 200
  }

  public static error(code: number, error: AppError): Result<unknown> {
    const result = new Result<unknown>(false)
    result.addError(error, code)
    return result
  }

  public static success<T>(resposta?: T): Result<T> {
    const result = new Result<T>(true)
    result.addData(resposta)
    return result
  }
}
