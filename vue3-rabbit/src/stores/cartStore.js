// 封装购物车模块

import { defineStore } from 'pinia'
import { ref,computed } from 'vue'


export const useCartStore = defineStore('cart', () => {
  // 1. 定义state - cartList
  const cartList = ref([])
  // 2. 定义action - addCart
  //这goods对象如何出来？？
  const addCart = (goods) => {
    console.log('添加', goods)


    // 添加购物车操作
    // 已添加过 - count + 1
    // 没有添加过 - 直接push
    // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    if (item) {
      // 找到了
      item.count++
    } else {
      // 没找到
      cartList.value.push(goods)
    }
  }


//这边添加删除
// 删除购物车
const delCart = async (skuId) => {
    // 思路：
    // 1. 找到要删除项的下标值 - splice
    // 2. 使用数组的过滤方法 - filter
    const idx = cartList.value.findIndex((item) => skuId === item.skuId)
    //从索引idx开始，删除一个元素
    cartList.value.splice(idx, 1)
}

//这边添加总共有多少件商品
//数组长度，还有count++?怎么计算
//0是初始值，这里面有个隐含的含义，a代表目标值，c代表数组的元素，c.count就是属性
const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))

// 这边添加计算购物车价格的方法
const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

//接着添加同步单选的功能
// 单选功能
const singleCheck = (skuId, selected) => {
  // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
  const item = cartList.value.find((item) => item.skuId === skuId)
  item.selected = selected
}

// 全选
// 全选功能action
const allCheck = (selected) => {
  // 把cartList中的每一项的selected都设置为当前的全选框状态
  cartList.value.forEach(item => item.selected = selected)
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
    selectedPrice
  }
}, 
//添加持久化操作
{
  persist: true,
})