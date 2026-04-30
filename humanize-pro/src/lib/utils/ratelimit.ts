import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

export const freeRatelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.fixedWindow(3, '1 d'),
  analytics: true,
  prefix: 'humanize_free',
})

export const proRatelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(200, '1 d'),
  analytics: true,
  prefix: 'humanize_pro',
})

export const premiumRatelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(1000, '1 d'),
  analytics: true,
  prefix: 'humanize_premium',
})
