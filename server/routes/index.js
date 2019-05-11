const express = require('express');
const path = require('path');

const router = express.Router();

const STATIC_DIR = path.resolve(__dirname, '../../public');

router.use((req, res, next) => {
  if (req.url.match(/[(/projects)(/tech)(/about)]/)) {
    return res.sendFile(`${STATIC_DIR}/index.html`);
  }

  return next();
});

module.exports = router;
