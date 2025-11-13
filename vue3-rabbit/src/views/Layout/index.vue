<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
//添加吸顶导航
import LayoutFixed from './components/LayoutFixed.vue'

//在这里引入状态管理
import { useCategoryStore } from '@/stores/category'
import {onMounted } from 'vue';
const categoryStore = useCategoryStore()

onMounted(async () => {
  console.log('Layout 组件挂载，开始获取分类数据')
  try {
    await categoryStore.getCategory()
    console.log('Layout 获取分类数据完成，当前 categoryList:', categoryStore.categoryList)
  } catch (error) {
    console.error('Layout 获取分类数据失败:', error)
  }
})


</script>

<template>
   <LayoutFixed />
 <LayoutNav />
  <LayoutHeader />
  <!-- 添加，让它强制销毁后重建 -->
  <RouterView :key="$route.fullPath"/>
  <LayoutFooter />
</template>