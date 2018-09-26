const Koa = require('koa');
const app = module.exports = new Koa();

app.use(async function(ctx) {
  console.log('url=', ctx.url)
  // console.log('url=', ctx.url)
  switch (ctx.url) {
    case '/hello': ctx.body = '你好'; break
    case '/name': ctx.body = 'neil'; break
    // '/name' : ...; break
    case '/id': ctx.body = '110510551'; break
    // '/id'   : ...; break
    default : ctx.status = 404
  }
  ctx.body = 'Hello World';
  // ctx.body = 'Hello World';
});

if (!module.parent) app.listen(3000);
