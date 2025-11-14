import { ref } from 'vue'
//状态管理，后面要重点加强
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'


export const useCategoryStore = defineStore('category', () => {
  // 小兔鲜儿绿色图片旁边导航列表的数据管理
  // state 导航列表数据
  const categoryList = ref([])

  // action 获取导航数据的方法
  const getCategory = async () => {
    const res = await getCategoryAPI()
    categoryList.value = res.result  
  }

  return {
    categoryList,
    getCategory
  }
})