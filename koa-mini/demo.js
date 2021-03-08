// const Application = require('./koa')
const Koa = require('koa')

// const app = new Application()
const app = new Koa()

app.use(async (ctx, next) => {
  console.log('Middleware 1 Start', ctx.req.url)
  await next()
  console.log('Middleware 1 End')
})

app.use(async (ctx, next) => {
  console.log('Middleware 2 Start')
  await next()
  console.log('Middleware 2 End')

  ctx.body = 'hello, world'
})

app.listen(7000)
