//作初始化工作
// import './assets/main.css'
// 导入Element Plus样式
import 'element-plus/dist/index.css'
//添加对axios的测试
import {getCategoryAPI } from '@/apis/testAPI'
//main.js
import '@/styles/common.scss'
import { createApp } from 'vue'
import App from './App.vue'
//这里引入了路由管理
import router from './router'
//导入piano进行状态管理
import { createPinia } from 'pinia'

//字体图标使用案例
// 在 main.js 中引入本地文件
//import '@/assets/fonts/iconfont.css'


const pinia=createPinia()
const app=createApp(App)
app.use(router)
app.use(pinia)

//引入懒加载插件
import { mylazyPlugin } from '@/directives'
app.use(mylazyPlugin)


// 在应用挂载后测试API
app.mount('#app')

// API测试调用
getCategoryAPI().then(
    (res)=>{
        console.log("抓到了")
        console.log(res)
    }
)
