//定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'



import ImageView from '@/components/ImageView.vue';
import XtxSku from '@/components/XtxSku.vue';
//全局组件暴露

//这里的逻辑是不是应该换成composables里定义，防止逻辑断掉？？
export const myplugin = {
    install(app) {
        app.component("ImageView", ImageView);
        app.component("XtxSku", XtxSku);
    }
}

export const mylazyPlugin = {
    install(app) {
        // 懒加载指令逻辑
        app.directive("img-lazy", {
            mounted(el, binding) {
                const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
                    if (isIntersecting) {
                        // 进入视口区域
                        el.src = binding.value
                            // 停止监听器
                        stop()
                    }
                })
            },
        })
    }
}