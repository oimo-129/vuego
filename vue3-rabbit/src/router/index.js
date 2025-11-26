//添加路由设置
import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/views/Layout/index.vue';
import Home from '@/views/Home/index.vue';
import Login from '@/views/Login/index.vue';
import Category from '@/views/Category/index.vue';
import SubCategory from '@/views/SubCategory/index.vue';
import Detail from '@/views/Detail/index.vue';
import Checkout from '@/views/Checkout/index.vue';
//列表购物车
import CartList from '@/views/CartList/index.vue';
//引入自己编写的测试组件
import Test from '@/views/Test/index.vue';

const router = createRouter({
    //全局变量适应不了
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            component: Layout,
            children: [
                { path: '', component: Home },
                { path: 'category/:id', component: Category },
                { path: 'category/sub/:id', name: 'subCategory', component: SubCategory },
                { path: 'detail/:id', name: 'detail', component: Detail },
                { path: 'cartlist', name: 'cartlist', component: CartList },
                { path: 'checkout', name: 'checkout', component: Checkout },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },     
        {
            path: '/test',
            name: 'test',
            component: Test,
        }
    ],
    //添加路由行为配置项，vue-router提供的
    scrollBehavior() {
        return { top: 0 };
    }
});

export default router;