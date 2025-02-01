export interface AppErrorDetail {
  name: string
  description: string
}

export class ApplicationError {
  process: string
  message: string
  details: AppErrorDetail[]

  constructor(process: string, message: string, details: AppErrorDetail[]) {
    this.process = process
    this.message = message
    this.details = details
  }
}
