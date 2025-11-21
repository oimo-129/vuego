//作初始化工作
// import './assets/main.css'
// 导入Element Plus样式
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
//添加对axios的测试
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
//main.js
import '@/styles/common.scss'
import { createApp } from 'vue'
import App from './App.vue'
//这里引入了路由管理
import router from './router'
//导入piano进行状态管理
import { createPinia } from 'pinia'



const pinia = createPinia()
    //引入持久化插件

pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(ElementPlus)
    //引入懒加载插件
import { mylazyPlugin } from '@/directives'
app.use(mylazyPlugin)
    //引入我加载的全局组件插件
import { myplugin } from '@/directives'
app.use(myplugin)

//挂载点的理解与配置
app.mount('#app')