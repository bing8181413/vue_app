import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChangeColor from '@/components/ChangeColor'
import Md from '@/components/md'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/ChangeColor',
            name: 'ChangeColor',
            component: ChangeColor
        },
        {
            path: '/md',
            name: 'Md',
            component: Md
        }
    ]
})
