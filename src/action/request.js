import axios from 'axios';
import server from './api';
// 拿taken，在请求拦截器中添加
import RootStore from '../mobx';

// server 循环遍历输出不同的请求方法
const instance = axios.create({
  //基础路径
  baseURL: 'https://www.baidu.com',
  // 请求限时
  timeout: 10000,
});
// 包裹循环遍历出的请求方法
let Http = {};

for (let key in server) {
  let api = server[key]; // url method

  Http[key] = async (params, isFormData = false, config = {}) => {
    let url = api.url;
    let newParams = {};

    if (params && isFormData) {
      newParams = new FormData();
      for (let i in params) {
        newParams.append(i, params[i]);
      }
    } else {
      newParams = params;
    }
    let response;
    if (
      api.method === 'get' ||
      api.method === 'put' ||
      api.method === 'patch'
    ) {
      try {
        response = await instance[api.method](api.url, newParams, config);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        response = await instance[api.method](api.url, config);
      } catch (e) {
        console.log(e);
      }
    }
    return response;
  };
}
// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 加入token
    let token = RootStore.userStore.allData.token;
    if (token) {
      config.headers.token = `${token}`;
    }
    return config;
  },
  (err) => {
    console.log(err);
  },
);

// 相应拦截器
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response) {
      switch (err.response.status) {
        case 401:
        /*
         * 返回401 表示前端的token 已经失效
         * 状态码 前后端统一
         * 清除token
         */
      }
    }
    return Promise.reject(err);
  },
);
export default Http;
