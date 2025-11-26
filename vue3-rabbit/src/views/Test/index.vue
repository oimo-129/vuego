<!-- ... existing code ... -->
<template>
  <div v-if="isMounted" ref="chartRef" style="width: 600px; height: 400px;"></div>
  <div v-else>没有挂载呢</div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import * as echarts from 'echarts'

const isMounted = ref(false)
const chartRef = ref<HTMLDivElement | null>(null)
let chart: echarts.ECharts | null = null

const handleResize = () => chart?.resize()

onMounted(async () => {
  isMounted.value = true
  await nextTick() // 等待 v-if 渲染出容器
  if (!chartRef.value) return
  chart = echarts.init(chartRef.value)
  chart.setOption({
    title: { text: 'ECharts 入门示例' },
    tooltip: {},
    xAxis: { data: ['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子'] },
    yAxis: {},
    series: [{ name: '销量', type: 'bar', data: [5,20,36,10,10,20] }]
  })
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  chart?.dispose()
  chart = null
})
</script>
<!-- ... existing code ... -->