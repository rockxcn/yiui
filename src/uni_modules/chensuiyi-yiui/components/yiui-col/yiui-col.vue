<template>
    <view class="yiui-col" :class="classNames" :style="styleNames">
        <slot></slot>
    </view>
</template>
<script>
import { isNumber } from "lodash-es";
import { clearEmptyValue, getStyleUnitValue } from "../../utils.js";
export default {
    name: "YiUi-Col",
    inject: ["space"],
    props: {
        lg: {
            type: String,
            default: "1-1",
        },
        pc: {
            type: String,
            default: "1-1",
        },
        pd: {
            type: String,
            default: "1-1",
        },
        mb: {
            type: String,
            default: "1-1",
        },
        sm: {
            type: String,
            default: "1-1",
        },
    },
    data() {
        return {};
    },
    computed: {
        classNames() {
            return clearEmptyValue([
                //
                `lg-${this.lg}`,
                `pc-${this.pc}`,
                `pd-${this.pd}`,
                `mb-${this.mb}`,
                `sm-${this.sm}`,
            ]);
        },
        styleNames() {
            return clearEmptyValue({
                paddingLeft: getStyleUnitValue(this.space),
                paddingRight: getStyleUnitValue(this.space),
            });
        },
    },
    created() {},
};
</script>
<style lang="scss" scoped>
.yiui-col {
}
</style>
