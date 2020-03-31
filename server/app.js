import Koa from 'koa';
import routes from './routers/router';
import template from './template';
import enhanceResponse from "./middleware/response";
import logger from "koa-logger";
import auth from "./middleware/auth";
import error from "./middleware/error";

const app = new Koa();


app
  .use(template)
  .use(enhanceResponse)
  .use(logger())
  .use(auth)
  .use(error)
  .use(routes.routes())
  .use(routes.allowedMethods())


// 浏览器输入 url => 服务器匹配对应的路由 => 获取对应路由的组件和数据生成 html
app.listen(9000, () => {
  console.log(`服务已经启动, 请访问 http://localhost:9000`)
});
