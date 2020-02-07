import path from 'path';
import express from 'express';
import { config } from 'dotenv';
import rootRouter from './routes';

config();

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(rootRouter);

const port = process.env.PORT || 3000;

const server = app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);

if (process.env.NODE_ENV === 'test') server.close();

export default server;
