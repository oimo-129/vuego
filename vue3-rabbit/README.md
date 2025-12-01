12.1 JS加强，echart

12.2.echart ,切图仔基础外加一种布局深入理解



# Front-compress

JS部分

**1.var,let,const区别**

1.作用域，2.变量提升TDZ，3.是否可重复声明，4.使用场景

var是函数作用域,或全局作用域，取决于最近的函数，容易受到污染，声明会被提升，初始化为undefined，可重复声明	

let，const是es6新特性，作用于块级作用域，有变量提升，但有TDZ(暂时性死区),同一作用域内不能重复声明

TDZ，暂时性死区（从块开始到变量声明的这段区域，变量在，但不能访问，弥补变量提升的保护机制），强调先声明，后定义

const核心在于变量引用的不变性

优先使用const ，明确需要使用变量则使用let，任何情况都不使用var



**2.判断类型最精确的方法：**

```javascript
Object.prototype.toString.call()
```



**3.值类型与引用类型**（从写代码第一天起就知道，但是表述不清晰）



1.值类型:7种，String ,boolen,int ,bigint ,(❌️)

​				String ,Number,Boolen,Null,Undefined,Symbol,BigInt(7种)

2.引用类型:变量存储的是内存地址，我们称之为引用，数据本身存放在堆

​		4种：Object,Array,Function,其他对象

3.函数传递参数，Javascript永远是按值传递，值传递是值的副本，引用传递是引用的副本

```javascript
function(obj){
	obj.name="引用副本"
	obj={name:"新对象"}
}
obj={name:"测试"}
console.log(obj.name) //引用对象
```

4.const保证变量存储的地址不变,里面的属性可修改



**5.Deep Copy ,Shadow Copy**

- 按照我们对python里面的理解，深拷贝，就是拷贝整个对象，浅拷贝，只是拷贝内存地址？（❌️）

- 浅拷贝只拷贝一层，共享引用；复制原始对象第一层属性，如果属性引用类型，则复制内存地址

- 构造浅拷贝：Object.assign()，{...original}（扩展运算符）

- 深拷贝递归地复制所有层级的属性，新旧对象完全独立

- 构造深拷贝：JSON.parse(JSON.stringify())    structuredClone()

- 手写一个深拷贝

  ```
  //注意边界
  //注意递归？？？
  。。。感觉不会写，等JS理解深入后，有缘在写吧
  ```



**6.Array**.Method()

1. 迭代 forEach
2. 修改原数组 splice
3. 返回新数组 map,reduce

```javascript
//会修改原数组，不记得什么方法了
shift()
//转换与创建，新数组
map()
//筛选,返回新数组
filter()
//累加，我们探究过
reduce(callback,initialize)//初始值 
//删除，添加，修改原数组
splice()
```



问：组件的通信方式



```
Prop完成
attr?
emit？
pinia,
stores，状态管理
```

双向绑定，数据和视图都可以流通，js<——>template

不光指父子
测试界面要引入字体图标，该怎么搞？？

项目资料网页
https://xiaobaicai350.github.io/2023/06/18/%E5%B0%8F%E5%85%94%E9%B2%9C%E9%A1%B9%E7%9B%AE/

## 技术栈说明

- **Vite**：新一代前端构建工具，比 Webpack 更快
- **Vue Router**：官方路由管理器
- **Pinia**：Vue 3 官方推荐的状态管理库
- **Axios**：HTTP 请求库
- **Element Plus**：Vue 3 UI 组件库dev                                                                                                    



创建组件，绑定路由关系，测试跳转完成

，占位符写好，预留接口

前端初级工作：创建组件，封装接口，调用数据，渲染模板

内容2，基础配置，然后外加js指南 模块部分

这里有个登录的判断

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



scss的简单使用，自己总要写一份吧

功能拆解



需要加强：11.18

1. **JavaScript 基础**
   - 变量、函数、对象
   - 数组方法（map、filter）
   - ES6 语法（箭头函数、解构）



有太多需要加强

git ,然后测试，然后额chart，npm这个包管理，这个注册表怎么回事？？

类的实用？？

   

Echart 数据可视化工具的使用





## 11.29

行业调研

## 11.30 

需要使用VUE的，然后双休的，然后公司规模大一点的

大公司抖音需要工程化经验，同时还需要React

小公司需要UI整合能力

我们再练一个echart ,

然后还要有



## 工作内容

一面修改简历，一面从前端八股文，UI还原，工程化，性能优化四个方面进行整备



## 12.1

明日需要修改简历，从echart，及切图还原开始



canvas,echart ,node写后端

## 12.11最后一天



## 公司岗位

[字节岗位需要React](https://jobs.bytedance.com/experienced/position/6754245066035824909/detail?recomId=16cc7e56-cdf4-11f0-8dbd-b8cef65c9f0e&sourceJobId=6820675367368771854)

[字节岗位需要移动端](https://jobs.bytedance.com/experienced/position/6820675367368771854/detail)



## 12.12 出发

