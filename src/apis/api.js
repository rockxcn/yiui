import Vue from 'vue';
import axios from 'axios';
import { getStorage } from '@/utils/index.js';
// =============================================
// 配置小程序请求适配器
axios.defaults.adapter = function(config) {
    return new Promise((resolve, reject) => {
        let settle = require('axios/lib/core/settle');
        let buildURL = require('axios/lib/helpers/buildURL');
        let url = buildURL(/^https?:\/\//.test(config.url) === true ? config.url : config.baseURL + config.url, config.params, config.paramsSerializer);
        uni.request({
            method: config.method.toUpperCase(),
            url: url,
            header: config.headers,
            data: config.data,
            dataType: config.dataType,
            responseType: config.responseType,
            sslVerify: config.sslVerify,
            complete: function complete(response) {
                response = {
                    data: response.data,
                    status: response.statusCode,
                    errMsg: response.errMsg,
                    header: response.header,
                    config: config
                };

                settle(resolve, reject, response);
            }
        });
    });
};
let request = axios.create({
    method: 'get',
    baseURL: process.env.VUE_APP_HOST,
    timeout: 1000 * 60,
    withCredentials: false,
    responseType: 'json',
    responseEncoding: 'utf8',
    // maxContentLength: 2000,
    headers: {
        // "Content-Type": "application/x-www-form-urlencoded",
        // 'Content-Type': 'application/json;utf-8'
    }
});
// 添加请求拦截器
request.interceptors.request.use(
    function(config) {
        if (getStorage('jwt')) {
            config.headers.authorization = getStorage('jwt');
        }
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

// 添加响应拦截器
request.interceptors.response.use(
    function(res) {
        // 正常返回
        if (res.data.code === 0) {
            return Promise.resolve(res.data);
        }
        uni.showToast({
            icon: 'none',
            title: res.data.msg,
            duration: 5000,
            mask: false
        });
        // this.$refs.uTips.show({
        //     title: '铁马冰河入梦来',
        //     type: 'success',
        //     duration: '2300'
        // })

        // 其他错误
        return Promise.reject(res.data);
    },
    function(error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

Vue.prototype.$Api = request;
export default request;
