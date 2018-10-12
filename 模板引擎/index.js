/**
 * index.js
 *
 * @author bigggge(me@haoduoyu.cc)
 * 2018/10/12.
 */

const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const app = new Koa();

app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}));

app.use(async (ctx) => {
  let title = 'hello koa2';
  await ctx.render('index', {
    title
  });
});

app.listen(7001);