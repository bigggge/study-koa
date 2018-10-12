/**
 * index.js
 *
 * @author bigggge(me@haoduoyu.cc)
 * 2018/10/11.
 */

const Koa = require('koa');
const path = require('path');
const content = require('./util/content');
const mimes = require('./util/mimes');

const app = new Koa();

const staticPath = './static';

function parseMime(url) {
  let extName = path.extname(url);
  extName = extName ? extName.slice(1) : 'unknown';
  return mimes[extName];
}

app.use(async (ctx) => {
  let absoluteStaticPath = path.join(__dirname, staticPath);

  let _content = await content(ctx, absoluteStaticPath);

  let _mime = parseMime(ctx.url);

  if (_mime) {
    ctx.type = _mime;
  }

  if (_mime && _mime.indexOf('image/') >= 0) {
    ctx.res.writeHead(200);
    ctx.res.write(_content, 'binary');
    ctx.res.end();
  } else {
    ctx.body = _content;
  }
});

app.listen(7001);