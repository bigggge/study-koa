/**
 * index.js
 *
 * @author bigggge(me@haoduoyu.cc)
 * 2018/10/11.
 */

const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

function render(page) {
  return new Promise((resolve, reject) => {
    let viewUrl = `./view/${page}`;
    fs.readFile(viewUrl, 'binary', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function route(url) {
  let view = '404.html';
  switch (url) {
    case '/':
      view = 'index.html';
      break;
    case '/index':
      view = 'index.html';
      break;
    case '/todo':
      view = 'todo.html';
      break;
    case '/404':
      view = '404.html';
      break;
    default:
      break;
  }
  let html = await render(view);
  return html;
}

app.use(async (ctx) => {
  let url = ctx.request.url;
  let html = await route(url);
  ctx.body = html;
});

// app.use(async (ctx) => {
//   let url = ctx.request.url;
//   ctx.body = url;
// });

app.listen(7001);



