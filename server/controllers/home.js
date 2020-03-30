import service from '../mock/36kr'

export default {
  flash: async (ctx, next) => {
    const { id, page } = ctx.query;
    const homeData = await service.fetchFlash(id, page);
    ctx.body = homeData.data;
    ctx.type = 'json';
  },
  column: async (ctx, next) => {
    const { page } = ctx.query;
    const data = await service.fetchColumn(page);
    ctx.body = data.data;
    ctx.type = 'json';

  }
}
