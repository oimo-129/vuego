import request from '@/utils/http.js'

/**
 *@description: 获取分类数据
 @param {*} id 分类id
 @return {*}
 */

export const getTopCategoryAPI = (id) => {
    return request({
        url: "/category",
        params: {
            id
        },
    })
}

//完成面包屑导航，这里应该是二级路由
export const getCategoryFilterAPI = (id) => {
    return request({
        url: "/category/sub/filter",
        params: {
            id
        }
    })
}