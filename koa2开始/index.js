/**
 * index.js
 *
 * @author bigggge(me@haoduoyu.cc)
 * 2018/10/11.
 */

const Koa = require('koa');
// const convert = require('koa-convert');
// const loggerGenerator = require('./basic/middleware/logger-generator');
const loggerAsync = require('./basic/middleware/logger-async');
const app = new Koa();

// app.use(convert(loggerGenerator()));
app.use(loggerAsync());

app.use(async (ctx) => {
  ctx.body = 'hello koa2';
});

app.listen(7001);
console.log('app is starting at port 7001');

