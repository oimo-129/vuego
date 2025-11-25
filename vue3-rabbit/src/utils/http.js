//axios基础封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/userStore'

// import { useRoute } from 'vue-router'
// const route = useRoute()
// 这句话调用时机不对
import router from '@/router'

//axios实例
const httpInstance = axios.create(
    {
        //基础路径
        baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
        timeout: 5000
    }
)

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  //载入token
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if(token){

    // 请求头的内部参数
    config.headers.Authorization = `Bearer ${token}`
  }
  
  return config
  }, e => Promise.reject(e))
  






  // axios响应式拦截器,在登录模块时重新建立
httpInstance.interceptors.response.use(
  res => res.data,
  e => {
    //通过拦截器的方式，发送信息？？没明白
    //状态码200正常，其他的会触发拦截器？
    console.log("post拦截器触发")
    ElMessage(
      {
        type: 'warning',
        message: e.response.data.message 
      }
    )
   // 401 token失效处理
    if (e.response.status === 401) {
      const userStore = useUserStore()
      userStore.clearUserInfo()
      router.push('/login')
    }
    return Promise.reject(e)
  })
  
export default httpInstance