<template>
    <view class="yiui-row" :style="styleNames">
        <slot></slot>
    </view>
</template>
<script>
import { clearEmptyValue, getStyleUnitValue } from "../../utils.js";
export default {
    name: "YiUi-Row",
    data() {
        return {};
    },
    props: {
        // 展示模式
        mode: {
            type: String,
            default: "flex",
        },
        // 是否换行
        wrap: {
            type: String,
            default: "wrap",
        },
        // 子元素之间的间隔
        space: {
            type: [Number, String],
            default: 0,
        },
    },
    provide() {
        return {
            space: this.space,
        };
    },
    computed: {
        styleNames() {
            return clearEmptyValue({
                display: this.mode,
                flexWrap: this.wrap,
                marginLeft: getStyleUnitValue(this.space),
                marginRight: getStyleUnitValue(this.space),
            });
        },
    },
};
</script>
<style lang="scss" scoped>
.yiui-row {
}
</style>
