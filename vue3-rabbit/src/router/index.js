//添加路由设置
//引入二级路由
// 添加路由设置
import { createRouter, createWebHistory } from 'vue-router';

// 引入页面组件
import Layout from '@/views/Layout/index.vue';
import Home from '@/views/Home/index.vue';
import Login from '@/views/Login/index.vue';
import Category from '@/views/Category/index.vue';
import SubCategory from '@/views/SubCategory/index.vue';

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
                { path: 'category/sub/:id', name: 'subCategory', component: SubCategory }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        }
    ],
    //添加路由行为配置项，vue-router提供的
    scrollBehavior() {
        return { top: 0 };
    }
});

export default router;