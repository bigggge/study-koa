import Router from 'koa-router';
import React from 'react';
import HomeController from '../controllers/home';
import DetailController from '../controllers/detail';
import BlogController from '../controllers/blog';
import UserController from '../controllers/user';

const router = new Router();

BlogController.updateBlog();

router.get('/', (ctx, next) => {
  ctx.render({
    home: {
      title: '我是从node中获取的数据'
    }
  });
  next();
});

router.get('/page/detail', (ctx, next) => {
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

router.get('/page/*', (ctx, next) => {
  ctx.render();
  next();
});

router.get('/api/flash', HomeController.flash);
router.get('/api/column', HomeController.column);
router.get('/api/detail', DetailController.detail);
router.get('/api/blogs', BlogController.getBlogs);
router.get('/api/blog/:id', BlogController.getBlog);
router.post('/api/blog/:id', BlogController.updateBlog);
router.post('/api/user/register', UserController.register);
router.post('/api/user/login', UserController.login);

export default router;
