<template>
  <div class="blog-container">
    <!-- 顶部区域 -->
    <div class="header">
      <div class="title">显示: oimo-blog</div>
      <div class="actions">
        <el-button type="primary" @click="toggleDate">显示日期</el-button>
        <el-button type="primary" disabled>日志汇总，留个接口，暂时不用设计</el-button>
      </div>
    </div>

    <!-- 日期显示区域 -->
    <div v-if="showDate" class="date-display">
      {{ currentDate }}
    </div>

    <!-- 文本编辑区 -->
    <div class="editor-area">
      <el-input
        v-model="blogContent"
        type="textarea"
        placeholder="文本编辑区"
        :rows="15"
        resize="none"
      />
    </div>

    <!-- 提交按钮 -->
    <div class="submit-area">
      <el-button type="primary" size="large" @click="submitBlog">提交按钮</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import axios from 'axios'

const showDate = ref(false)
const currentDate = ref('')
const blogContent = ref('')

// 切换日期显示
const toggleDate = () => {
  showDate.value = !showDate.value
  if (showDate.value) {
    const now = new Date()
    currentDate.value = now.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }
}

// 提交博客
const submitBlog = async () => {
  if (!blogContent.value.trim()) {
    ElMessage.warning('请输入日志内容')
    return
  }

  try {
    const response = await axios.post('http://localhost:8000/api/blogs/', {
      content: blogContent.value
    })

    ElMessage.success('日志提交成功')
    blogContent.value = ''
  } catch (error) {
    ElMessage.error('日志提交失败: ' + (error.response?.data?.message || error.message))
  }
}
</script>

<style scoped>
.blog-container {
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f5f5f5;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.title {
  background-color: #5b7db1;
  color: white;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
}

.actions {
  display: flex;
  gap: 15px;
}

.date-display {
  background-color: #e8f0fe;
  padding: 10px 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
}

.editor-area {
  margin-bottom: 20px;
}

.editor-area :deep(.el-textarea__inner) {
  background-color: #5b7db1;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
}

.editor-area :deep(.el-textarea__inner)::placeholder {
  color: rgba(255, 255, 255, 0.7);
  font-size: 24px;
  text-align: center;
}

.submit-area {
  display: flex;
  justify-content: flex-end;
}

.submit-area .el-button {
  background-color: #5b7db1;
  border: none;
  padding: 15px 40px;
  font-size: 18px;
}
</style>
