import { isArray, isObject, isNumber } from "lodash-es";
import { buildinColor, buildinSize } from "./config.js";
// 清除空值
export function clearEmptyValue(data) {
    // 返回数组
    if (isArray(data)) {
        let newArr = [];
        data.forEach((item) => {
            if (item !== "" && item !== undefined && item !== null) {
                newArr.push(item);
            }
        });
        return newArr;
    }

    // 返回对象
    if (isObject(data)) {
        let newObj = {};
        for (let prop in data) {
            if (data.hasOwnProperty(prop) && data[prop] !== "" && data[prop] !== undefined && data[prop] !== null) {
                newObj[prop] = data[prop];
            }
        }
        return newObj;
    }

    // 默认返回
    return data;
}

// 获取CSS值
export function getStyleUnitValue(value) {
    let styleUnitValue = isNumber(value) ? `${value}rpx` : value;
    return styleUnitValue;
}

// 判断是否是内置的颜色名
export function isBuildinColor(name) {
    return buildinColor.includes(name);
}

// 判断是否是内置的尺寸名
export function isBuildinSize(name) {
    return buildinSize.includes(name);
}
