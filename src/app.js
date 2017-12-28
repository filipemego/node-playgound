const Koa = require('koa');
const bootstrap = require('./config/bootstrap');

const app = new Koa();
const APP_PORT = process.env.APP_PORT || 80;

bootstrap(app);

if (!module.parent) {
    app.listen(APP_PORT, () => {
        console.log(`Running app on port ${APP_PORT}`);
    });
}