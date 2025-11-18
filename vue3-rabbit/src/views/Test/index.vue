<script lang="ts" setup>
//双向绑定
import { ref } from 'vue';
const input = ref('')

const handleClick = () => {
  console.log('当前输入框的值为:', input.value);
}
</script>

<template>
  <div class="container">
    <el-input v-model="input" style="width: 240px" placeholder="测试双向绑定" />
    <el-button type="primary" @click="handleClick">测试</el-button>
  </div>
  
</template>


<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
