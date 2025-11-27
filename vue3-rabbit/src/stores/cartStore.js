// 封装购物车模块

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserStore } from './userStore'
import { insertCartAPI, findNewCartListAPI, delCartAPI, updateCartAPI, updateCartSelectedAPI } from '@/apis/cart'

export const useCartStore = defineStore('cart', () => {
  // 1. 定义state - cartList
  const cartList = ref([])
  // 2. 定义action - addCart
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)
  //那里是接口，这里才抽象出来
  //优化，抽象出来获取购物车状态
  const updateNewList = async () => {
    const res = await findNewCartListAPI()
    cartList.value = res.result
  }
  //增加登录下购物车逻辑
  const addCart = async (goods) => {

    const { skuId, count } = goods
    if (isLogin.value) {
      // 登录之后的加入购车逻辑
      await insertCartAPI({ skuId, count })
      updateNewList()

    } else {
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
      if (item) {
        // 找到了
        item.count++
      } else {
        // 没找到
        cartList.value.push(goods)
      }
    }
  }


  // 删除购物车
  const delCart = async (skuId) => {
    if (isLogin.value) {
      // 调用接口实现接口购物车中的删除功能
      await delCartAPI([skuId])
      updateNewList()
    } else {
      // 思路：
      // 1. 找到要删除项的下标值 - splice
      // 2. 使用数组的过滤方法 - filter
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      //从索引idx开始，删除一个元素
      cartList.value.splice(idx, 1)
    }

  }


  //用户退出，执行清除购物车操作
  const clearCart = () => {
    cartList.value = []
  }
 
  //0是初始值，这里面有个隐含的含义，a代表目标值，c代表数组的元素，c.count就是属性
  const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))

  // 这边添加计算购物车价格的方法
  const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

  //接着添加同步单选的功能
  // 单选功能
  const singleCheck = async (skuId, selected) => {
    console.log("=== singleCheck 调用 ===")
    console.log("skuId:", skuId)
    console.log("selected:", selected)
    console.log("isLogin:", isLogin.value)

    if (isLogin.value) {
      // 登录状态：调用接口更新服务器数据
      const item = cartList.value.find((item) => item.skuId === skuId)
      console.log("找到的商品:", item)

      if (!item) {
        console.error("❌ 未找到商品！skuId:", skuId)
        return
      }

      console.log("准备调用 API，item.id:", item.id)
      await updateCartAPI(item.id, { selected })
      console.log("✅ API 调用成功，正在刷新购物车列表...")
      // 更新本地列表
      await updateNewList()
      console.log("✅ 购物车列表已刷新")
    } else {
      // 未登录状态：只更新本地数据
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.selected = selected
      console.log("未登录，仅更新本地")
    }
    console.log("=======================")
  }

  // 全选
  // 全选功能action
  const allCheck = async (selected) => {
    console.log("=== allCheck 调用 ===")
    console.log("selected:", selected)
    console.log("isLogin:", isLogin.value)

    if (isLogin.value) {
      // 登录状态：调用接口更新服务器数据（批量更新所有商品）
      const ids = cartList.value.map(item => item.skuId)
      console.log("准备批量更新，skuIds:", ids)
      await updateCartSelectedAPI(selected, ids)
      console.log("✅ 批量更新 API 调用成功")
      // 更新本地列表
      await updateNewList()
      console.log("✅ 购物车列表已刷新")
    } else {
      // 未登录状态：只更新本地数据
      cartList.value.forEach(item => item.selected = selected)
      console.log("未登录，仅更新本地")
    }
    console.log("====================")
  }


  // 是否全选计算属性，这边应该是一个判断
  const isAll = computed(() => cartList.value.every((item) => item.selected))
  //购物车列表统计
  // 3. 已选择数量
  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
  // 4. 已选择商品价钱合计
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))


  return {
    cartList,
    addCart,
    delCart,  //删除商品
    allCount,//商品总数量
    allPrice,//商品总价格
    singleCheck,//同步是否选中
    allCheck,//同步全选
    isAll,//是否全选
    selectedCount,
    selectedPrice,
    clearCart,
    updateNewList
  }
},
  //添加持久化操作
  {
    persist: true,
  })