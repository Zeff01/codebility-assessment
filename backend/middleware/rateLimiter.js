// middleware/rateLimiter.js

// Very simple in-memory rate limiter per IP + route.
// Fine for this assessment (not production-grade).

const buckets = new Map();

/**
 * @param {Object} options
 * @param {number} options.windowMs - time window in ms
 * @param {number} options.max - max requests per window
 */
function rateLimiter({ windowMs = 60_000, max = 5 } = {}) {
  return (req, res, next) => {
    const key = `${req.ip}:${req.originalUrl}`;
    const now = Date.now();

    if (!buckets.has(key)) {
      buckets.set(key, []);
    }

    const timestamps = buckets.get(key);

    // Remove timestamps outside the window
    while (timestamps.length && timestamps[0] <= now - windowMs) {
      timestamps.shift();
    }

    if (timestamps.length >= max) {
      return res.status(429).json({
        message: 'Too many requests, please try again later.'
      });
    }

    timestamps.push(now);
    buckets.set(key, timestamps);

    next();
  };
}

module.exports = rateLimiter;
