import Vue from "vue";
import Vuex from "vuex";
import config from "@/config/index.js";
import { forOwn as _forOwn } from "lodash-es";
// 获取系统状态栏的高度
let systemInfo = uni.getSystemInfoSync();
Vue.mixin({
    data() {
        return {
            // 共享数据
            shareData: {},
        };
    },
    mounted() {},
    computed: {
        ...Vuex.mapState(["loginData", "userData"]),
    },
    methods: {
        ...Vuex.mapMutations(["$Commit"]),
        // 获取插叙参数
        getQuery(query) {
            let str = "";
            let arr = [];
            _forOwn(query, (value, key) => {
                arr.push(key + "=" + value);
            });
            str += "?" + arr.join("&");
            return str;
        },
        // 登录判断
        loginCheck(data) {
            return new Promise((resolve, reject) => {
                // 如果没有登录，则进行跳转
                if (!this.userData.id) {
                    this.goto("", {}, "loginCheck", false);
                } else {
                    resolve();
                }
            });
        },
        // 跳转函数
        async goto(url = "", data = {}, type = "navigateTo", auth = false) {
            /**
             * type 跳转类型 navigateTo navigateBack redirectTo switchTab
             * url 跳转到哪
             * from 来自哪里
             * data 查询参数
             * auth 是否认证
             * 一般用于点击跳转认证
             */
            let _types = ["", "loginCheck", "reLaunch", "navigateTo", "navigateBack", "redirectTo", "switchTab"];

            if (_types.includes(type) === false) {
                this.toastShow("跳转类型错误");
                return;
            }

            // 地址栏拼接参数
            let _data = this.getQuery(data || {});

            /**
             * 如果需要认证，且未登录
             * 则 H5 环境跳转到登录页
             * 微信小程序环境，跳转到认证页
             */
            if (auth === true && !this.userData.id) {
                // #ifdef H5
                uni.reLaunch({
                    url: "/pages/login/login" + _data,
                });
                // #endif
                // #ifdef MP-WEIXIN
                uni.reLaunch({
                    url: "/pages/auth/auth" + _data,
                });
                // #endif
                return;
            }

            // 如果是底部的导航 ，则使用switchTab方法进行跳转
            if (config.tabbars.includes(url) === true) {
                uni.switchTab({
                    url: url,
                });
                return;
            }

            // 登录判断专用
            if (type === "loginCheck") {
                // #ifdef H5
                uni.reLaunch({
                    url: "/pages/login/login" + _data,
                });
                // #endif
                // #ifdef MP-WEIXIN
                uni.reLaunch({
                    url: "/pages/auth/auth" + _data,
                });
                // #endif
                return;
            }

            if (type === "navigateTo") {
                uni.navigateTo({
                    url: url + _data,
                });
                return;
            }
            if (type === "navigateBack") {
                uni.navigateBack();
                return;
            }
            if (type === "redirectTo") {
                uni.redirectTo({
                    url: url + _data,
                });
                return;
            }
            if (type === "switchTab") {
                uni.switchTab({
                    url: url,
                });
                return;
            }
        },
        // 显示消息
        toastShow(title, icon) {
            return new Promise((resolve, reject) => {
                uni.showToast({
                    title: title || "提示消息",
                    icon: icon || "none",
                    duration: 3000,
                    mask: true,
                    complete: () => {
                        resolve();
                    },
                });
            });
        },
        // 加载中
        loadingShow(title) {
            uni.showLoading({
                title: title || "加载中...",
                mask: true,
            });
        },
        // 关闭加载弹框
        loadingHide() {
            uni.hideLoading();
        },
        // 设置存储
        setStorage(key, data) {
            uni.setStorageSync(`${config.namespace}.${key}`, data);
        },
        // 获取存储
        getStorage(key) {
            return uni.getStorageSync(`${config.namespace}.${key}`);
        },
    },
});
