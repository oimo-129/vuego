import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/login'
import { mergeCartAPI } from '@/apis/cart'
import { useCartStore } from './cartStore'
//1.定义setup函数
export const useUserStore = defineStore(
    'user',
    () => {
        //2. state
        const userInfo = ref({})
        //3. action
        const getUserInfo = async({ account, password }) => {
            const cartStore = useCartStore()
            const res = await loginAPI({
                account,
                password
            })
            userInfo.value = res.result
            mergeCartAPI(cartStore.cartList.map(item => {
                return {
                    skuId: item.skuId,
                    selected: item.selected,
                    count: item.count
                }
            }))
            cartStore.updateNewList()
        }
        const clearUserInfo = () => {
            const cartStore = useCartStore()
            userInfo.value = {}
            cartStore.clearCart()
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