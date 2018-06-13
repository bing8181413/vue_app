import main from '@/page/container/main';

import table from '@/page/demo/table';
import HelloWorld from '@/components/HelloWorld';
import ChangeColor from '@/components/ChangeColor';
import Md from '@/components/md';

let mainRouter = {
  path: '/main',
  component: main,
};
Array.prototype.pushArrayOrObject = function(arrayOrObject) {
  if (arrayOrObject.constructor == Array) {
    this.push(...arrayOrObject);
  } else {
    this.push(arrayOrObject);
  }
};

mainRouter.children = [];
mainRouter.children.pushArrayOrObject(
    [
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
      }],
);
export default mainRouter;
