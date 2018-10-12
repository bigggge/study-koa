/**
 * session.js
 *
 * @author bigggge(me@haoduoyu.cc)
 * 2018/10/12.
 */

const Koa = require('koa');
const session = require('koa-session-minimal');
const MysqlSession = require('koa-mysql-session');

const app = new Koa();

let store = new MysqlSession({
  user: 'root',
  password: 'root',
  database: 'study-koa-session',
  host: 'localhost'
});

app.use(session({
  key: 'SESSION_ID',
  store: store,
  cookie: {
    maxAge: 1000 * 10,
    expires: '',
    path: '',
    domain: '',
    httpOnly: '',
    overwrite: '',
    secure: '',
    sameSite: '',
    signed: '',
  }
}));

app.use(async (ctx) => {
  if (ctx.url === '/set') {
    ctx.session = {
      user_id: Math.random().toString(36).substr(2),
      count: 0
    };
    ctx.body = ctx.session;
  } else if (ctx.url === '/') {
    ctx.session.count = ctx.session.count + 1;
    ctx.body = ctx.session;
  }
});

app.listen(7001);