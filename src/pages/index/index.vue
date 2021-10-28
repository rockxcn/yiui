<template>
    <view class="page-full page-index">
        <yiui-row :space="10">
            <yiui-col sm="1-3"><div class="box">1-3</div></yiui-col>
            <yiui-col sm="1-3"><div class="box">1-3</div></yiui-col>
            <yiui-col sm="1-3"><div class="box">1-3</div></yiui-col>
            <yiui-col sm="2-3"><div class="box">2-3</div></yiui-col>
            <yiui-col sm="1-3"><div class="box">1-3</div></yiui-col>
            <yiui-col sm="2-5"><div class="box">2-5</div></yiui-col>
            <yiui-col sm="3-5"><div class="box">3-5</div></yiui-col>
            <yiui-col sm="1-1"><div class="box">1-1</div></yiui-col>
            <yiui-col sm="2-7"><div class="box">2-7</div></yiui-col>
            <yiui-col sm="4-7"><div class="box">4-7</div></yiui-col>
            <yiui-col sm="1-7"><div class="box">1-7</div></yiui-col>
            <yiui-col sm="6-11"><div class="box">6-11</div></yiui-col>
            <yiui-col sm="2-11"><div class="box">2-11</div></yiui-col>
            <yiui-col sm="3-11"><div class="box">3-11</div></yiui-col>
            <yiui-col sm="1-4"><div class="box">1-4</div></yiui-col>
            <yiui-col sm="1-4"><div class="box">1-4</div></yiui-col>
            <yiui-col sm="1-4"><div class="box">1-4</div></yiui-col>
            <yiui-col sm="1-4"><div class="box">1-4</div></yiui-col>
            <yiui-col sm="1-5"><div class="box">1-5</div></yiui-col>
            <yiui-col sm="1-5"><div class="box">1-5</div></yiui-col>
            <yiui-col sm="1-5"><div class="box">1-5</div></yiui-col>
            <yiui-col sm="1-5"><div class="box">1-5</div></yiui-col>
            <yiui-col sm="1-5"><div class="box">1-5</div></yiui-col>
        </yiui-row>
        <yiui-button bgColor="primary" frColor="white">123</yiui-button>
    </view>
</template>

<script>
export default {
    data() {
        return {};
    },
    onLoad() {},
    methods: {},
};
</script>

<style lang="scss" scoped>
.box {
    border: 1px solid #ddd;
    margin-top: 20rpx;
    padding: 0 10rpx;
    height: 60rpx;
    display: flex;
    align-items: center;
    font-size: 28rpx;
    color: #999;
    border-radius: 12rpx;
}
</style>
