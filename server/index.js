const express = require('express');
const path = require('path');

const app = express();
const STATIC_DIR = path.resolve(__dirname, '../public');

app.use(express.static(STATIC_DIR));

app.get('/', (req, res) => {
  console.log('request received');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
