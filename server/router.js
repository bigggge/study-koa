import Router from 'koa-router';
import React from 'react';

const routes = new Router();

routes.get('/', (ctx, next) => {
  ctx.render({
    home: {
      title: '我是从node中获取的数据'
    }
  });
  next();
});

routes.get('/detail', (ctx, next) => {
  ctx.render({
    detail: {
      list: [
        'data',
        'from',
        'node'
      ]
    }
  });
  next();
});

export default routes;
