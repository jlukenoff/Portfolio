import express from 'express';
import STATIC_DIR from '../constants';

const router = express.Router();

router.use((req, res, next) => {
  if (req.url.match(/[(/projects)(/tech)(/about)]/)) {
    // server rendering operations here
    return res.sendFile(`${STATIC_DIR}/index.html`);
  }

  return next();
});

export default router;
