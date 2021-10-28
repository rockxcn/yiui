<template>
    <view class="yiui-button" :class="classNames" :style="styleNames">
        <slot></slot>
    </view>
</template>
<script>
import { clearEmptyValue, getStyleUnitValue, isBuildinColor, isBuildinSize } from "../../utils.js";
export default {
    name: "YiUi-Button",
    data() {
        return {};
    },
    props: {
        size: {
            type: String,
            default: "",
        },
        // 背景颜色
        bgColor: {
            type: String,
            default: "primary",
        },
        // 文本颜色
        frColor: {
            type: String,
            default: "white",
        },
        // 边框颜色
        bdColor: {
            type: String,
            default: "info",
        },
        // 外间距
        mgSize: {
            type: String,
            default: "",
        },
        // 内间距
        pdSize: {
            type: String,
            default: "xs",
        },
    },
    provide() {
        return {
            space: this.space,
        };
    },
    computed: {
        classNames() {
            return clearEmptyValue({
                [`yiui-bg-color-${this.bgColor}`]: isBuildinColor(this.bgColor),
                [`yiui-fr-color-${this.frColor}`]: isBuildinColor(this.frColor),
                [`yiui-bd-color-${this.bdColor}`]: isBuildinColor(this.bdColor),
                [`yiui-mg-size-${this.mgSize}`]: isBuildinSize(this.mgSize),
                [`yiui-pd-size-${this.pdSize}`]: isBuildinSize(this.pdSize),
            });
        },
        styleNames() {
            return clearEmptyValue({
                backgroundColor: isBuildinColor(this.bgColor) ? "" : this.bgColor,
                color: isBuildinColor(this.frColor) ? "" : this.frColor,
                borderColor: isBuildinColor(this.bdColor) ? "" : this.bdColor,
                margin: isBuildinSize(this.mgSize) ? "" : this.mgSize,
                padding: isBuildinSize(this.pdSize) ? "" : this.pdSize,
            });
        },
    },
};
</script>
<style lang="scss" scoped>
.yiui-button {
    border-width: 1px;
    border-style: solid;
}
</style>
