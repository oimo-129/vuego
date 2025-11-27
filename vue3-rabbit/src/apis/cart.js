//线上购物车的后台接口
import request from '@/utils/http'

// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
    return request({
      url: '/member/cart',
      method: 'POST',
      data: {
        skuId,
        count
      }
    })
  }
  


  // 获取最新的购物车列表
export const findNewCartListAPI = () => {
    return request({
      url: '/member/cart'
    })
  }
  
  
// 删除购物车
export const delCartAPI = (ids) => {
    return request({
      url: '/member/cart',
      method: 'DELETE',
      data: {
        ids
      }
    })
  }


//合并购物车需求
  export const mergeCartAPI = (data) => {
    return request({
      url: '/member/cart/merge',
      method: 'POST',
      data
    })
  }


// 更新购物车单个商品（选中状态或数量）
export const updateCartAPI = (id, data) => {
  return request({
    url: `/member/cart/${id}`,
    method: 'PUT',
    data
  })
}

// 批量更新购物车商品选中状态
export const updateCartSelectedAPI = (selected, ids) => {
  return request({
    url: '/member/cart/selected',
    method: 'PUT',
    data: {
      selected,
      ids
    }
  })
}