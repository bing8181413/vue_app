import Vue from 'vue';
import Router from 'vue-router';

import loginRouter from './login';
import mainRouter from './main';

let routes = [];
Vue.use(Router);

routes.pushArrayOrObject(loginRouter);
routes.pushArrayOrObject(mainRouter);

export default new Router({routes});
