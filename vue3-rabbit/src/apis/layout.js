import httpInstance from "@/utils/http";

export function getCategoryAPI(){
    return httpInstance({
        // 根据后端来的
        url: '/home/category/head'
    })
}