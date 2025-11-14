<script setup>
// 设定组件名称方便路由调试
defineOptions({ name: 'SubCategoryView' })
// 面包屑导航
import { ref, onMounted } from "vue";
import { getCategoryFilterAPI } from "@/apis/category";
import { useRoute } from "vue-router";

const route = useRoute();
const filterData = ref({});
//拿后端给的数据
const getFileData = async () => {
  console.log("SubCategory 组件已挂载，当前路由参数 id:", route.params.id);
  const res = await getCategoryFilterAPI(route.params.id);
  filterData.value = res.data;
  console.log("SubCategory 数据:", res.data);
};

//生命周期挂载
onMounted(() => {
  console.log("SubCategory onMounted 执行");
  getFileData();
});

</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <!-- 这里好像没有用二级路由 -->
        <el-breadcrumb-item :to="{ path: `/category/${filterData.parentId}` }">
        {{ filterData.parentName }}
         </el-breadcrumb-item>
         <!-- 不对，这里拿的是二级 -->
        <el-breadcrumb-item>{{ filterData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs>
        <el-tab-pane label="最新商品12341" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body">
        <!-- 商品列表-->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
