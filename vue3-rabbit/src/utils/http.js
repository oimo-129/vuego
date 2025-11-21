//axios基础封装
import axios from 'axios'
import { ElMessage } from 'element-plus'

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
    return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器,在登录模块时重新建立
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    //通过拦截器的方式，发送信息？？没明白
    //状态码200正常，其他的会触发拦截器？
    ElMessage(
      {
        type: 'error',
        message: e.response.data.message 
      }
    )
    return Promise.reject(e)
  })
  
export default httpInstance