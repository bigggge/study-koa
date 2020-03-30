const enhanceResponse = (ctx, next) => {
  ctx.success = (result) => {
    ctx.body = {
      success: true,
      result
    }
  };
  ctx.error = (reason) => {
    ctx.body = {
      success: false,
      reason
    };
  };
  return next()
};

export default enhanceResponse
