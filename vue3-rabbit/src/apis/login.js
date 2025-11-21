// 封装所有和用户相关的接口函数
import request from "@/utils/http";

//配置拦截器？？
export const loginAPI = ({ account, password }) => {
  return request({
    url: "/login",
    method: "POST",
    data: {
      account,
      password,
    },
  });
};
