<script setup>
import { ref }  from 'vue'
import { useRouter } from 'vue-router'
//根据用户是否有token，判断是否使用相关页面

import { useUserStore } from '@/stores/userStore'
const userStore = useUserStore()
const router = useRouter()

//退出动作
const confirm = () => {
  userStore.clearUserInfo()
  router.push('/login')
   ElMessage({
          type:'success',
          message:'退出成功！！！！！'
        })
}

</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="userStore.userInfo.token">

         <li>
      <RouterLink to="test">测试</RouterLink>
          </li>

          <li>
          <a href="javascript:;">
          <i class="iconfont icon-user"></i>{{ userStore.userInfo.account }}</a>
          </li>

          <!-- 退出登录模块 -->
          <li>
            <el-popconfirm @confirm="confirm" title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消">
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>

          <li><a href="javascript:;">我的订单</a></li>
          <li><a href="javascript:;">会员中心</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;" @click="router.push('/login')">请先登录</a></li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>


<style scoped lang="scss">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 14px;
          margin-right: 2px;
        }

        &:hover {
          color: $xtxColor;
        }
      }

      ~li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>