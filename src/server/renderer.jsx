import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import App from "../App";

function renderHTML(html) {
    return `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300" rel="stylesheet">
          <title>Netflix Roulette</title>
          ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
          <script src="/js/main.js" defer></script>
        </head>
        <body>
          <div id="root">${html}</div>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
    return (req, res) => {
        const context = {};

        const root = (
            <App
                context={context}
                location={req.url}
                Router={StaticRouter}
            />
        );

        const htmlString = renderToString(root);

        if (context.url) {
            res.writeHead(302, {
                Location: context.url,
            });
            res.end();
            return;
        }

        res.send(renderHTML(htmlString));
    };
}
