import express from 'express';
import rateLimiter from './rateLimiter.js';
import { predict as mockPredict } from './mockModelo.js';

const PORT = process.env.PORT || 3000;
const MAX_REQ = parseInt(process.env.RATE_LIMIT_MAX || '10', 10);
const WINDOW_SEC = parseInt(process.env.RATE_LIMIT_WINDOW || '60', 10);
const MODEL_READY = process.env.MODEL_READY === 'true';

const app = express();
app.use(express.json());

app.post(
  '/v1/predict',
  rateLimiter({ maxRequests: MAX_REQ, windowSec: WINDOW_SEC }),
  async (req, res) => {
    try {
      if (MODEL_READY) {
        return res.json({ ok: true, model: 'real', result: null });
      } else {
        const result = await mockPredict(req.body);
        return res.json({ ok: true, model: 'mock', result });
      }
    } catch (err) {
      return res.status(500).json({ error: 'internal_error', message: String(err) });
    }
  }
);

app.get('/health', (req, res) => res.json({ up: true, model_ready: MODEL_READY }));

app.listen(PORT, () => {
  console.log(`Mock model server listening on http://localhost:${PORT} (rate ${MAX_REQ}/${WINDOW_SEC}s)`);
});