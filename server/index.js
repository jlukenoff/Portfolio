import path from 'path';
import express from 'express';
import rootRouter from './routes';

const app = express();

// app.use((req, res, next) => {
//   console.log('req.url:', req.url);
//   return next();
// });

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(rootRouter);

const port = process.env.PORT || 3000;

const server = app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);

if (process.env.NODE_ENV === 'test') server.close();

export default server;