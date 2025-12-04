<template>
<div class="myecharts" :model="mychart">
</div>
</template>

<script>

//这里有个问题，我项目需要elenet-ui，我需要再js中引入，如果没有，那么会报错，
//如何添加echarts到配置文件里面？？
var option = {
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
      };

const mychart=document.getElementsByClassName("myecharts")
var demo = echarts.init(mychart)
demo.setOption(option)
</script>

<style>
.myecharts{
width: 600px;height:400px;
}


</style>

