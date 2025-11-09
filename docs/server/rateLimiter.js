
export default function rateLimiter({ maxRequests = 10, windowSec = 60 } = {}) {
  const windowMs = windowSec * 1000;
  const refillRate = maxRequests / windowMs;
  const buckets = new Map(); // tem que add a key

  return (req, res, next) => {
    const key = (req.header('x-api-key') || req.ip || 'anon').toString();
    const now = Date.now();
    let b = buckets.get(key);

    if (!b) {
      b = { tokens: maxRequests, last: now };
      buckets.set(key, b);
    } else {
      const elapsed = now - b.last;
      const refill = elapsed * refillRate;
      b.tokens = Math.min(maxRequests, b.tokens + refill);
      b.last = now;
    }

    if (b.tokens < 1) {

      const msToNextToken = Math.ceil(((1 - b.tokens) / refillRate));
      const retryAfterSec = Math.ceil(msToNextToken / 1000);
      res.set('Retry-After', String(retryAfterSec));
      return res.status(429).json({
        error: 'rate_limit_exceeded',
        retry_after_seconds: retryAfterSec
      });
    }

    b.tokens -= 1;
    next();
  };
}