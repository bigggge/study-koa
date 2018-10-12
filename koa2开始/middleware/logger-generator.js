/**
 * logger-generator.js
 *
 * @author bigggge(me@haoduoyu.cc)
 * 2018/10/11.
 */

function log(ctx) {
  console.log(ctx.method, ctx.header.host + ctx.url);
}

module.exports = function() {
  return function* (next) {
    log(this);
    if (next) {
      yield next;
    }
  };
};