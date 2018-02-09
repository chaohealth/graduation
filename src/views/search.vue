<template>
<div>
    <!-- 头部 -->
    <mu-appbar class="search-header" title="搜索结果">
        <mu-icon-button class="go-back" icon="keyboard_arrow_left" slot="left" @click="goBack"/>
    </mu-appbar>

    <!-- 结果 -->
    <p class="search-number">共 1 条结果</p>
    <mu-card class="workContent-third">
        <div class="work-img"><img src="../assets/images/position_third.jpg" alt=""></div>
        <mu-content-block class="work-position">
            <div class="position-top">
                <span>腾讯Web前端实习生</span>
                <span>03-15 更新</span>
            </div>
            <div class="position-middle"><span>Tencent</span></div>
            <div class="position-bottom">
                <div class="position-left">
                    <img src="../assets/images/position_address.png" alt="">
                    <span>深圳</span>
                </div>
                <div class="position-center">
                    <img src="../assets/images/position_time.png" alt="">
                    <span>5天/周</span>
                </div>
                <div class="position-right">
                    <span>&yen;150-200/天</span>
                </div>    
            </div>
        </mu-content-block>
    </mu-card>

</div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            goBack() {
                this.$router.go(-1);
        }
    }
}

</script>

<style>
/* 搜索头部 */
.search-header {
    position: fixed;
    top:0;
    color: #000;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    background-color: #fdd835; 
}
.go-back {
    position: absolute;
    margin-top: 3px;
}

/* 搜索结果 */
.search-number {
    margin-top: 20%;
    padding-bottom: 2%;
    width: 100%;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size: 18px;
    text-align: left;
    text-indent: 10px;
}
.workContent-third {
    height: 100px;
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
}
.work-img {
    float: left;
    width: 25%;
    height: 100%;
}
.work-img img{
    width: 72px;
    height:72px;
    margin-top: 13%;
    margin-left: -8%;
}
.work-position {
    width: 75%;
    height: 100%;
    margin-left: 25%;
}
.position-top, .position-middle, .position-bottom {
    height: 33%;
}
.position-top :first-child {
    position: absolute;
    margin-left: -39%;
    font-size: 19px;
    font-weight: bolder;
}
.position-top :first-child + span {
    float: right;
    margin-top: 1%;
    font-size: 15px;
}
.position-middle span {
    float: left;
    display: block;
    margin-top: 3%;
    margin-left: -8%;
    font-size: 14px;
}
.position-left {
    display: inline-block;
    width: 26%;
    margin-left: -32%;
    margin-top: 11px;
}
.position-left img {
    width: 12px;
    height: 15px;
}
.position-center {
    display: inline-block;
    width: 26%;
}
.position-center img {
    width: 12px;
    height: 15px;
}
.position-right {
    float: right;
    width: 48%;
    margin-top: 10px;
}
.position-right span {
    position: relative;
    margin-left: 26%;
    font-size: 16px;
    font-weight: bold;
    color: #f44336;
}
</style>