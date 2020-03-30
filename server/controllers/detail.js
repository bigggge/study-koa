import service from '../mock/36kr'

export default {
  detail: async (ctx, next) => {
    const { id } = ctx.query;
    const data = await service.fetchDetail(id);
    ctx.body = { data };
    ctx.type = 'json';
  }
}
