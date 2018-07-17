import main from '@/page/container/main';


import table from '@/page/demo/table';
import delegate from '@/page/demo/delegate';
import inlineBlock from '@/page/demo/inlineBlock';


import HelloWorld from '@/components/HelloWorld';
import ChangeColor from '@/components/ChangeColor';
import Md from '@/components/md';
import CenterMiddle from '@/components/CenterMiddle';

let mainRouter = {
    path: '/main',
    component: main
};
Array.prototype.pushArrayOrObject = function (arrayOrObject) {
    if (arrayOrObject.constructor == Array) {
        this.push(...arrayOrObject);
        console.log(this);
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
            component: table
        },
        {
            path: 'HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: 'ChangeColor',
            name: 'ChangeColor',
            component: ChangeColor
        },
        {
            path: 'md',
            name: 'Md',
            component: Md,
            meta: ['添加数据', '添加商铺']
        },
        {
            path: 'cm',
            name: 'CenterMiddle',
            component: CenterMiddle,
            meta: ['水平垂直居中']
        },
        {
            path: 'delegate',
            name: 'delegate',
            component: delegate,
            meta: ['事件委托']
        },
        {
            path: 'inlineBlock',
            name: 'inlineBlock',
            component: inlineBlock,
            meta: ['inline-block']
        }
    ]
);
export default mainRouter;
