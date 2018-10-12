/**
 * koa-static.js
 *
 * @author bigggge(me@haoduoyu.cc)
 * 2018/10/11.
 */

const Koa = require('koa');
const path = require('path');
const static = require('koa-static');

const app = new Koa();

const staticPath = './static';

app.use(static(
  path.join(__dirname, staticPath)
));

app.use(async (ctx) => {
  ctx.body = 'hello world!';
});

app.listen(7001);