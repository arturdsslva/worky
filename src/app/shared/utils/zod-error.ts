import { Messages } from '@/app/shared/utils'
import { z } from 'zod'

export const zodError: z.RawCreateParams = {
  required_error: Messages.REQUIRED,
  invalid_type_error: Messages.INVALID_TYPE,
}
