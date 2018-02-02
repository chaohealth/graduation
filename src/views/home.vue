<template>
<div style="height: 105vh">
    <!-- 头部 -->
    <mu-appbar class="home-header">
        <mu-content-block class="header-title">实习每一天</mu-content-block>
        <mu-icon-button class="search-button" icon="search"/>
        <mu-text-field class="search-text" hintText="请输入搜索职位" underlineFocusClass="search-color" slot="right"/>
    </mu-appbar>
    
    <!-- 轮播图 -->
    <mt-swipe :speed="400" class="home-swipe">
    	<mt-swipe-item >
            <img src="../assets/images/banner-second.jpg" alt="">
        </mt-swipe-item>
    	<mt-swipe-item >
            <img src="../assets/images/banner-third.jpg" alt="">
        </mt-swipe-item>
    	<mt-swipe-item >
            <img src="../assets/images/banner_first.png" alt="">
        </mt-swipe-item>
    </mt-swipe>

    <!-- 选项卡 -->
    <mu-tabs class="home-tabs" lineClass="tab-color" :value="activeTab" @change="handleTabChange">
        <mu-tab class="home-tab" value="tab-work" title="找职位"/>
        <mu-tab class="home-tab" value="tab-study" title="实习圈"/>
    </mu-tabs>

    <!-- 找职位 -->
    <div v-show="activeTab === 'tab-work'" >
        <mu-flexbox-item  class="tab-flex">
            职位列表
        </mu-flexbox-item>
        <mu-card class="workContent-first">
            <div class="work-img"><img src="../assets/images/position_first.jpg" alt=""></div>
            <mu-content-block class="work-position">
                <div class="position-top">
                    <span>优衣库实习生</span>
                    <span>03-20 更新</span>
                </div>
                <div class="position-middle"><span>Uniqlo</span></div>
                <div class="position-bottom">
                    <div class="position-left">
                        <img src="../assets/images/position_address.png" alt="">
                        <span>上海</span>
                    </div>
                    <div class="position-center">
                        <img src="../assets/images/position_time.png" alt="">
                        <span>3天/周</span>
                    </div>
                    <div class="position-right">
                        <span>&yen;100-200/天</span>
                    </div>    
                </div>
            </mu-content-block>
        </mu-card>
        <mu-card class="workContent-second">
            <div class="work-img"><img src="../assets/images/position_second.png" alt=""></div>
            <mu-content-block class="work-position">
                <div class="position-top">
                    <span>网易实习编导</span>
                    <span>03-18 更新</span>
                </div>
                <div class="position-middle"><span>NetEase</span></div>
                <div class="position-bottom">
                    <div class="position-left">
                        <img src="../assets/images/position_address.png" alt="">
                        <span>北京</span>
                    </div>
                    <div class="position-center">
                        <img src="../assets/images/position_time.png" alt="">
                        <span>5天/周</span>
                    </div>
                    <div class="position-right">
                        <span>&yen;100-120/天</span>
                    </div>    
                </div>
            </mu-content-block>
        </mu-card>
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
        <mu-card class="workContent-fourth">
            <div class="work-img"><img src="../assets/images/position_fourth.png" alt=""></div>
            <mu-content-block class="work-position">
                <div class="position-top">
                    <span>欢聚时代Node.js实习生</span>
                    <span>03-10 更新</span>
                </div>
                <div class="position-middle"><span>YY</span></div>
                <div class="position-bottom">
                    <div class="position-left">
                        <img src="../assets/images/position_address.png" alt="">
                        <span>广州</span>
                    </div>
                    <div class="position-center">
                        <img src="../assets/images/position_time.png" alt="">
                        <span>4天/周</span>
                    </div>
                    <div class="position-right">
                        <span>&yen;120-150/天</span>
                    </div>    
                </div>
            </mu-content-block>
        </mu-card>            
    </div>

    <!-- 实习圈 -->
    <div v-show="activeTab === 'tab-study'">
        <mu-flexbox-item  class="tab-flex">
            实习动态
        </mu-flexbox-item>
        <mu-card class="studyContent-first">
            <img src="../assets/images/study_avatar.jpg" alt="">
            <p class="study-title">前端实习生</p>
            <p class="study-content">好想找一份前端工作，学会使用vue.js和node.js!</p>
            <mu-content-block class="study-interactive">
                <span class="study-likes">0喜欢·</span>
                <span class="study-comments">0评论</span>
                <div class="study-right">
                    <mu-radio  name="like" nativeValue="simple" v-model="value"  class="demo-radio" uncheckIcon="favorite_border" checkedIcon="favorite"/>
                    <mu-icon-button icon="comment" slot="right" class="study-button"/>
                </div>
            </mu-content-block>
        </mu-card>
        <mu-float-button icon="add" class="add-button"/>
    </div>
    
</div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component('mt-swipe', Swipe);
Vue.component('mt-swipe-item', SwipeItem);


export default {
    data() {
        return {
            activeTab: "tab-work",
            simple: '',
            value: ''
    }
  },
    methods: {
        // 选项切换
        handleTabChange(val) {
            this.activeTab = val
    }
  }
}

</script>

<style>
/* 首页头部 */
.home-header {
    position: fixed;
    top:0;
    color: #000;
    background-color: #fdd835; 
}

.header-title {
    position: relative;
    margin-left: 40%;
    margin-top: -5%;
    width: 100px;
    height: 56px;
}

/* 搜索职位 */
.search-button {
    position: absolute;
    margin-left: 24%;
    margin-top: -10%;
}
.search-text {
    width: 120px;
    margin-top: 15px;
}
.search-color {
    background-color:#000;
}

/* 轮播图 */
.home-swipe {
    height: 205px;
    margin-top: -1%;
}
.home-swipe img {
    width: 100%;
    height: 210px;
}    

/* 选项卡 */
.home-tabs {
    background-color: #fff;
}
.home-tab {
    font-family: 'Hiragino Sans GB';
    font-size: 16px;
    color: #000;
}
.tab-color {
    background-color: #ffb300;
}

/* 找职位 */
.tab-flex {
  height: 45px;
  padding-left: 2%;
  font-size: 18px;
  font-weight: bold; 
  line-height: 45px;
  text-align: left;
  background-color: #f5f5f5;
}
.workContent-first {
    height: 100px;
    width: 100%;
    border-top: 1px solid #e0e0e0;
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
.workContent-second, .workContent-third, .workContent-fourth {
    height: 100px;
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
}


/* 实习圈 */
.studyContent-first {
    height: 160px;
    width: 100%;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
}
.study-title {
    float:left;
    height: 20px;
    margin-left: 4%;
    font-size: 19px;
    font-weight: bold;
}
.studyContent-first :first-child {
    float: left;
    margin-left: 3%;
    margin-top: 2%;
    width: 50px;
    height: 50px;
    border-radius: 50px;
}
.study-content {
    clear: both;
    height: 30%;
    padding-top: 2%;
    font-family: Tahoma,Helvetica,Arial,'宋体',sans-serif;
    font-size: 18px;
}
.study-interactive {    
    height: 50px;
    width: 100%;
    border-top: 1px dashed #bdbdbd;
}
.study-right {
    float: right;
    position: absolute;
    margin-left: 72%;
    height: 50px;
}
.study-likes{ 
    line-height: 10px;
}
.study-comments {
    position: absolute;
    margin-left: -39%;
    font-size: 14px;
    margin-top: 2px;
} 
.study-button {
    position: absolute;
    margin-top: -22%;
    margin-left: -45%;
} 
.add-button {
    position: fixed;
    right: 0;
    bottom: 10%;
    background-color: #ffb300;
}

</style> 