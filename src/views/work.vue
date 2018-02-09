<template>
<div>
    <!-- 头部 -->
    <mu-appbar class="work-header" title="职位详情">
        <mu-icon-button class="go-back" icon="keyboard_arrow_left" slot="left" @click="goBack"/>
    </mu-appbar>

    <!-- 基本 -->
    <div class="work-content">
        <p class="content-title">优衣库实习生</p>
        <span>&yen;100-120/天</span>
        <div class="content-info">
            <img src="../assets/images/position_address.png" alt="">
            <p class="info-address">上海</p>
            <img src="../assets/images/position_time.png" alt="">
            <p class="info-time">3天/周</p>
        </div>
    </div>
    <mu-divider/>
    <div class="work-intro">
        <img src="../assets/images/position_first.jpg" alt="">
        <span class="intro-title">优衣库</span>
        <span>快消/2000人以上</span>
    </div>
    <mu-flexbox-item  class="work-flex"/>

    <!-- 描述        -->
    <div class="work-description">
        <p class="description-title">职位描述:</p>
        <mu-divider/>
        <mu-content-block>
            <p class="work-post">| 岗位职责:</p>
            <p class="post-content">1.卖场相关业务（顾客接待、卖场整洁、商品整理、收银、缝补、仓库管理等）。</p>
            <p class="post-content">2.优衣库伙伴（高级）将会全面担当店铺的管理业务，成为独当一面的职业人。</p>
            <p class="work-post">| 任职要求:</p>
            <p class="post-content">1. 年满18周岁，全日制在读学生，大专、本科及以上学历。</p>
            <p class="post-content">2. 每周能到店铺工作3天、每天工作不少于4小时或月度合计96小时以上（包括周末及节假日）。</p>
            <p class="post-content">3. 具有良好的服务意识以及团队合作的精神，能够适应零售业的工作环境。</p>
            <p class="work-post">| 工作地点:</p>
            <p class="post-content">上海全城优衣库门店</p>
            <p class="work-post">| 简历投递:</p>
            <p class="post-content">recruit.campus@uniqlo.com.cn</p>
        </mu-content-block> 
    </div>  
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
body {
    overflow: scroll;
}
/* 职位头部 */
.work-header {
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

/* 基本内容 */
.work-content {
    margin-top: 18%;
}
.content-title {
    float:left;
    margin-top: -1%;
    font-family: 'Hiragino Sans GB';
    font-size: 30px;
    text-indent: 15px;
    letter-spacing: 3px;
    color: #000;
}
.work-content > span {
    float: right;
    margin-top: 6px;
    font-size: 18px;
    font-weight: bold;
    color: #f44336;
}
.content-info {
    clear: both;
    position: relative;
    width: 100%;
    height: 30px;
}
.content-info img {
    width: 20px;
    height: 25px;
}
.content-info :first-child {
    float:left;
    margin-left: 4%;
}
.info-address {
    position: absolute;
    margin-top: -2px;
    margin-left: 10%;
    font-family: 'Hiragino Sans GB';
    font-size: 18px;
}
.content-info :nth-last-child(2)  {
    margin-left: -55%;
}
.info-time {
    position: absolute;
    margin-left: 31%;
    margin-top: -32px;
    font-family: 'Hiragino Sans GB';
    font-size: 18px;
}
.work-intro {
    position: relative;
    width: 100%;
    height: 120px;
}
.work-intro img {
    position: absolute;
    margin-top: 8%;
    margin-left: -45%;
    width: 80px;
    height: 80px;
}
.intro-title {
    position: absolute;
    margin-left: -20%;
    margin-top: 7%;
    font-family: 'Source Han Sans';
    font-weight: bold;
    font-size: 20px;
    color: #000;
}
.work-intro :last-child {
    position: absolute;
    margin-top: 16%; 
    margin-left: -20%;
    font-family: 'Hiragino Sans GB';
    font-size: 15px;
}
.work-flex {
    height: 20px;
    background-color: #f5f5f5;
}

/* 职位描述 */
.work-description {
    width: 100%;
    height: 680px;
}
.description-title {
    font-family: 'Source Han Sans';
    font-weight: bold;
    font-size: 20px;
    text-align: left;
    text-indent: 20px;
    color: #000;
}
.work-post {
    font-size: 18px;
    text-align: left;
    text-indent: 4px;
    color: #000;
}
.post-content {
    font-family: 'Hiragino Sans GB';
    font-size: 17px;
    text-align: left;
    text-indent: 12px;
    color: #000;
}
</style>