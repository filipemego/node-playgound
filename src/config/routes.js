const KoaRouter = require('koa-router');
const routerV1 = new KoaRouter({
  prefix: '/v1'
});

const candidatesRoutes = require('./routes/v1/candidates')(routerV1);

module.exports = routerV1;