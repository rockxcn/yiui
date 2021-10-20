import _ from "lodash";
import config from "@/config/index.js";
// 通用一级数组生成树结构
export function generateTree(arrs, id = "id", pidName = "pid", children = "children") {
    let menuObject = _.keyBy(arrs, id);
    let menuArray = [];

    arrs.forEach((item) => {
        let parent = menuObject[item[pidName]];
        if (parent) {
            if (!parent[children]) {
                parent[children] = [];
            }
            parent[children].push(item);
        } else {
            menuArray.push(item);
        }
    });
    return menuArray;
}

// 设置存储
export function setStorage(key, data) {
    uni.setStorageSync(`${config.namespace}.${key}`, data);
}

// 获取存储
export function getStorage(key) {
    return uni.getStorageSync(`${config.namespace}.${key}`);
}
