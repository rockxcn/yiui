import Vue from "vue";
import Vuex from "vuex";
import config from "@/config/index.js";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // 用户登录数据
        loginData: uni.getStorageSync(`${config.namespace}.loginData`) || {},
        // 用户信息
        userData: uni.getStorageSync(`${config.namespace}.userData`) || {},
    },
    mutations: {
        // 通用提交方法
        $Commit(state, payload) {
            _.set(state, payload.path, payload.data);
        },
    },
});

export default store;
