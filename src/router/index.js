import Vue from 'vue';
import Router from 'vue-router';
import login from '@/page/container/login';
import main from '@/page/container/main';
import table from '@/page/demo/table';
import HelloWorld from '@/components/HelloWorld';
import ChangeColor from '@/components/ChangeColor';
import Md from '@/components/md';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/main',
      component: main,
      children: [
        {
          path: 'table',
          name: 'table',
          component: table,
        },
        {
          path: 'HelloWorld',
          name: 'HelloWorld',
          component: HelloWorld,
        },
        {
          path: 'ChangeColor',
          name: 'ChangeColor',
          component: ChangeColor,
        },
        {
          path: 'md',
          name: 'Md',
          component: Md,
          meta: ['添加数据', '添加商铺'],
        },
      ],
    },
  ],
});
