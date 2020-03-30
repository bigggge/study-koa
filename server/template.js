import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import RouterConfig from '../app/router'
import create from '../app/redux/store/create'
import { Provider } from "react-redux";

// 匹配模板中的{{}}
function templating(props) {
  const template = fs.readFileSync(path.join(__dirname, './server.html'), 'utf-8');
  return template.replace(/{{([\s\S]*?)}}/g, (_, key) => props[key.trim()]);
}

export default function (ctx, next) {
  try {
    ctx.render = (data = {}) => {
      console.log("render", data);
      const store = create(data);
      // 在浏览器上我们可以使用 js 获取到 location，但是在 node 环境却获取不到，
      // 所以 react-router 提供了 StaticRouter 来让我们自己设置 location
      const html = renderToString(
        <Provider store={store}>
          <StaticRouter location={ctx.url}>
            <RouterConfig />
          </StaticRouter>
        </Provider>
      );
      ctx.body = templating({
        html,
        store: JSON.stringify(data, null, 4),
      });
    }
  } catch (err) {
    ctx.body = templating({ html: err.message });
  }
  ctx.type = 'text/html';
  // 这里必须是return next() 不然异步路由是404
  return next();
}
