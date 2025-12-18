<template>
  <div ref="chartRef" class="myecharts"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref(null)

onMounted(() => {
  // 确保 DOM 已渲染
  if (chartRef.value) {
    // 初始化 echarts 实例
    const myChart = echarts.init(chartRef.value)
    
    // 配置项
    const option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }
    
    // 使用配置项显示图表
    myChart.setOption(option)
    
    // 响应式调整
    window.addEventListener('resize', () => {
      myChart.resize()
    })
  }
})
</script>

<style scoped>
.myecharts {
  width: 600px;
  height: 400px;
}
</style>

