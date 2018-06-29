import Vue from 'vue';
import Router from 'vue-router';

import loginRouter from './login';
import mainRouter from './main';

Vue.use(Router);
let routes = [];

Array.prototype.pushArrayOrObject = function(arrayOrObject) {
    if (arrayOrObject.constructor === Array) {
        this.push(...arrayOrObject);
    } else {
        this.push(arrayOrObject);
    }
};

routes.pushArrayOrObject(loginRouter);
routes.pushArrayOrObject(mainRouter);

export default new Router({routes});
