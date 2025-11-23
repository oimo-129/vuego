import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/login'


//1.定义setup函数
export const useUserStore = defineStore(
    'user',
    () => {
        //2. state
        const userInfo = ref({})
            //3. action
        const getUserInfo = async({ account, password }) => {
            const res = await loginAPI({
                account,
                password
            })
            userInfo.value = res.result
        }

        //添加退出action,不对，不对，不关它的事
        const clearUserInfo = () => {
            userInfo.value = {}
        }

        
        //4.return暴露
        return {
            getUserInfo,
            clearUserInfo,
            userInfo
        }
    },
    {
        //引入持久化插件
        persist: true
    }
)