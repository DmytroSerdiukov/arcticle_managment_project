import { z } from 'zod'

export const userData = z.object({
  login: z.string(),
  password: z.string(),
  rememberMe: z.boolean().optional(),
})
