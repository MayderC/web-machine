/**
 * In-memory rate limiting. Suitable for a single instance; entries expire and
 * are released automatically once their window passes.
 */

interface Bucket {
  count: number;
  resetAt: number;
}

const hits = new Map<string, Bucket>();
const failures = new Map<string, Bucket>();

let lastSweep = 0;

function sweep(now: number) {
  if (now - lastSweep < 60_000) return;
  lastSweep = now;
  for (const [key, bucket] of hits) {
    if (bucket.resetAt <= now) hits.delete(key);
  }
  for (const [key, bucket] of failures) {
    if (bucket.resetAt <= now) failures.delete(key);
  }
}

export interface RateLimitResult {
  ok: boolean;
  remaining: number;
  retryAfterSeconds: number;
}

/** Count a hit for `key` within a fixed window. */
export function rateLimit(
  key: string,
  limit: number,
  windowMs: number
): RateLimitResult {
  const now = Date.now();
  sweep(now);

  let bucket = hits.get(key);
  if (!bucket || bucket.resetAt <= now) {
    bucket = { count: 0, resetAt: now + windowMs };
    hits.set(key, bucket);
  }

  bucket.count += 1;

  return {
    ok: bucket.count <= limit,
    remaining: Math.max(0, limit - bucket.count),
    retryAfterSeconds: Math.ceil(Math.max(0, bucket.resetAt - now) / 1000),
  };
}

/** Check whether `key` is currently locked out after too many failures. */
export function isBlocked(
  key: string,
  maxFailures: number
): { blocked: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  const bucket = failures.get(key);

  if (!bucket || bucket.resetAt <= now) {
    return { blocked: false, retryAfterSeconds: 0 };
  }

  return {
    blocked: bucket.count >= maxFailures,
    retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000),
  };
}

/** Register a failed attempt; window restarts on the first failure. */
export function registerFailure(key: string, windowMs: number) {
  const now = Date.now();
  let bucket = failures.get(key);

  if (!bucket || bucket.resetAt <= now) {
    bucket = { count: 0, resetAt: now + windowMs };
    failures.set(key, bucket);
  }

  bucket.count += 1;
  return bucket.count;
}

export function clearFailures(key: string) {
  failures.delete(key);
}

/** Best-effort client IP from proxy headers. */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') || 'unknown';
}
