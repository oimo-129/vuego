<template>
  <div class="lazy-image-example">
    <h2>图片懒加载示例</h2>
    
    <!-- 使用懒加载指令 -->
    <div class="image-grid">
      <div v-for="(image, index) in images" :key="index" class="image-item">
        <img 
          v-img-lazy="image.url" 
          :alt="image.alt"
          class="lazy-image"
        />
        <p>{{ image.alt }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 模拟图片数据
const images = ref([
  {
    url: 'https://picsum.photos/300/200?random=1',
    alt: '图片 1'
  },
  {
    url: 'https://picsum.photos/300/200?random=2',
    alt: '图片 2'
  },
  {
    url: 'https://picsum.photos/300/200?random=3',
    alt: '图片 3'
  },
  {
    url: 'https://picsum.photos/300/200?random=4',
    alt: '图片 4'
  },
  {
    url: 'https://picsum.photos/300/200?random=5',
    alt: '图片 5'
  },
  {
    url: 'https://picsum.photos/300/200?random=6',
    alt: '图片 6'
  }
])
</script>

<style scoped>
.lazy-image-example {
  padding: 20px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.image-item {
  text-align: center;
}

.lazy-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  transition: opacity 0.3s ease;
}

.lazy-image:hover {
  opacity: 0.8;
}
</style>
