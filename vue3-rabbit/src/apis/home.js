//轮播图后端接口
import httpInstance from "@/utils/http";

export function getBannerAPI(params ={}){
    const { distributionSite = "1" } = params

    return httpInstance({
        url: '/home/banner',
        params:{
            distributionSite,
        }
    })
}

//新鲜好物接口

export const findNewAPI = ()=>{
    return httpInstance({
        url: '/home/new'
    })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return  httpInstance('home/hot', 'get', {})
  }



  /**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
    return httpInstance({
      url: '/home/goods'
    })
  }

