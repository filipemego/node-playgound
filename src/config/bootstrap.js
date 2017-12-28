const routes = require('./routes');

module.exports = (app) => {
  app
    .use(routes.routes())
    .use(routes.allowedMethods());
}