import { z } from 'zod'

const ApiEnvSchema = z.object({
  DATABASE_URL: z.string().url(),
  REDIS_URL: z.string().url(),
  JWT_SECRET: z.string().min(16),
  COOKIE_SECRET: z.string().min(16),
  STORE_CORS: z.string(),
  ADMIN_CORS: z.string(),
  VENDOR_CORS: z.string(),
  AUTH_CORS: z.string(),
  NODE_ENV: z.enum(['development', 'staging', 'production']).default('development'),
})

const StorefrontEnvSchema = z.object({
  NEXT_PUBLIC_MEDUSA_BACKEND_URL: z.string().url(),
  NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY: z.string(),
  NODE_ENV: z.enum(['development', 'staging', 'production']).default('development'),
})

export type ApiEnv = z.infer<typeof ApiEnvSchema>
export type StorefrontEnv = z.infer<typeof StorefrontEnvSchema>

export function validateEnv<T extends z.ZodType>(schema: T, env: Record<string, unknown> = process.env): z.infer<T> {
  const result = schema.safeParse(env)
  if (!result.success) {
    const formatted = result.error.issues
      .map((i) => `  ${i.path.join('.')}: ${i.message}`)
      .join('\n')
    throw new Error(`Environment validation failed:\n${formatted}`)
  }
  return result.data
}
