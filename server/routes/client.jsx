import express from 'express';
import React from 'react';
import { renderStylesToString } from 'emotion-server';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import redisClient from '../redis';
import App from '../../client/Components/App/App';

const router = express.Router();

router.use((req, res, next) => {
  // if a valid FE Route
  if (req.url.match(/[(/projects)(/tech)(/about)]/)) {
    // check redis cache
    return redisClient.get(req.url, (err, markup) => {
      if (err) {
        console.error(`Error fetching from redis store: ${err}`);
      }
      const context = {};
      // if markup was not found for URL
      if (!markup) {
        markup = renderStylesToString(
          renderToString(
            <StaticRouter location={req.url} context={context}>
              <App />
            </StaticRouter>
          )
        );
        redisClient.set(req.url, markup, e => {
          if (e)
            return console.error(`Error setting markup in redis cache: ${e}`);
          return console.log('Success, saved markup in redis');
        });
      } else {
        console.log('Success, retrieved from redis');
      }
      if (context.url) {
        return res.redirect(context.url);
      }
      return res.send(`<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
            integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
            crossorigin="anonymous"
          />
          <title>John Lukenoff</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <div id="app">${markup}</div>
          <script src="/bundle.js"></script>
        </body>
      </html>`);
    });
  }
  return next();
});

export default router;
