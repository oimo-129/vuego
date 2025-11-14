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
    ]
});

// 路由调试：输出匹配记录与最终组件
router.beforeEach((to, from, next) => {
    const last = to.matched[to.matched.length - 1]
    console.log('[Router beforeEach] to:', to.fullPath, 'matched count:', to.matched.length, 'last component name:', last && last.components && last.components.default && last.components.default.name)
    next()
})
router.afterEach((to) => {
    console.log('[Router afterEach] now at:', to.fullPath)
})

export default router;