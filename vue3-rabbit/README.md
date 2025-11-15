vue项目开发前置整合
11.12
问：组件的通信方式

不光指父子
测试界面要引入字体图标，该怎么搞？？

项目资料网页
https://xiaobaicai350.github.io/2023/06/18/%E5%B0%8F%E5%85%94%E9%B2%9C%E9%A1%B9%E7%9B%AE/

## 字体图标使用

### 使用 iconfont
1. 在 iconfont.cn 选择图标并下载
2. 将字体文件放入 `src/assets/fonts` 目录
3. 在 `main.js` 中引入：
```javascript
import '@/assets/fonts/iconfont.css'
```
4. 在组件中使用：
```html
<i class="iconfont icon-xxx"></i>
```

### 使用 Element Plus 图标
```bash
npm install @element-plus/icons-vue
```

```javascript
import { Plus, Delete } from '@element-plus/icons-vue'
```

## 技术栈说明

- **Vue 3**：渐进式 JavaScript 框架
- **Vite**：新一代前端构建工具，比 Webpack 更快
- **Vue Router**：官方路由管理器
- **Pinia**：Vue 3 官方推荐的状态管理库
- **Axios**：HTTP 请求库
- **Element Plus**：Vue 3 UI 组件库dev                                                                                                    



创建组件，绑定路由关系，测试跳转完成

，占位符写好，预留接口

前端初级工作：创建组件，封装接口，调用数据，渲染模板

内容2，基础配置，然后外加js指南 模块部分

可选链，v-if控制渲染，重点关注  ，它的作用时机   <!-- 

​        错误原因：goods一开始{}  {}.categories -> undefined  -> undefined[1]

​        1. 可选链的语法?. 

​        2. v-if手动控制渲染时机 保证只有数据存在才渲染

​      -->

组件封装的使用，查一下封装组件的技巧

热榜区简单适配

完成到了第四部分

props参数的使用
详情页完成，然后整理，打磨再继续后面的
