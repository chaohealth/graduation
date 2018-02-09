<template>
<div>
    <!-- 头部 -->
    <mu-appbar class="message-header" title="我的消息">
        <mu-icon-button class="go-back" icon="keyboard_arrow_left" slot="left" @click="goBack"/>
    </mu-appbar>

    <!-- 选项 -->
    <mu-tabs class="message-tabs" lineClass="tab-color" :value="activeTab" @change="handleTabChange">
    <mu-tab class="message-tab" value="tab-like" title="收到点赞"/>
    <mu-tab class="message-tab" value="tab-review" title="收到评论"/>
    </mu-tabs>

    <!-- 点赞 -->
    <div v-show="activeTab === 'tab-like'" >
        <div class="like-content">
            <img src="../assets/images/idea_avatar.jpg" alt="">
            <p class="like-title">前端大牛</p>
            <p class="like-review">赞了你 1 下</p>
            <p class="like-time">3-21 12:00</p>
        </div>
        <mu-divider/>
    </div>

    <!-- 评论 -->
    <div v-show="activeTab === 'tab-review'" >
        <div class="review-receive">
            <img class="review-img" src="../assets/images/idea_avatar.jpg" alt="">
            <p class="review-title">前端大牛</p>
            <p class="review-content">回复：要从基础学起。</p>
            <p class="review-time">3-21 12:00</p> 
            <div class="review-idea">
                <img src="../assets/images/study_avatar.jpg" alt="">
                <p class="idea-name">前端实习生</p>
                <p class="idea-details">好想找一份前端工作，学会使用vue.js和node.js!</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                activeTab: "tab-like",
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1);
        },
            // 选项切换
            handleTabChange(val) {
                this.activeTab = val
        },
    }
}

</script>

<style>
/* 消息头部 */
.message-header {
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

/* 选项卡 */
.message-tabs {
    background-color: #fff;
}
.message-tab {
    font-family: 'Hiragino Sans GB';
    font-size: 16px;
    color: #000;
}
.tab-color {
    background-color: #ffb300;
}

/* 收到点赞 */
.like-content {
    position: relative;
    height: 75px;
    margin-top: 2%;
}
.like-content img {
    position: absolute;
    margin-left: -47%;
    margin-top: 2%;
    width: 50px;
    height: 50px;
    border-radius: 50px;
}
.like-title {
    position: absolute;
    margin-left: 20%;
    margin-top: 1%;;
    font-size: 17px;
    font-weight: bold;
}
.like-review {
    position: absolute;
    margin-top: 8%;
    margin-left: 20%;
    font-family: 'Hiragino Sans GB';
    font-size: 17px;
    color: #f44336;
}
.like-time {
    position: absolute;
    color:#000;
    margin-top: 8%;
    margin-left: 80%;
}

/* 收到评论 */
.review-receive {
    position: relative;
    height: 115px;
    border-bottom: 2px solid #e0e0e0;
}
.review-img {
    position: absolute;
    margin-left: -45%;
    margin-top: -18%;
    width: 60px;
    height: 60px;
    border-radius: 60px;
}
.review-title {
    position: absolute;
    margin-left: 23%;
    margin-top: -18%;;
    font-size: 17px;
    font-weight: bold;
}
.review-content {
    position: absolute;
    margin-top: -10%;
    margin-left: 23%;
    font-family: 'Hiragino Sans GB';
    font-size: 17px;
    color:#000;
}
.review-time {
    position: absolute;
    color:#000;
    margin-top: -10%;
    margin-left: 80%;
}
.review-idea {
    position: relative;
    height: 90px;
    margin:  21% 8% 5% 8%;
    border: 1px solid #a1887f;
}
.review-idea img{
    float:left;
    width: 88px;
    height: 88px;  
}
.idea-name {
    position: absolute;
    margin-left: 30%;
    margin-top: 2%;;
    font-size: 17px;
    font-weight: bold;
}
.idea-details {
    position: absolute;
    margin-top: 10%;
    margin-left: 30%;
    width: 220px;
    height: 50px;
    text-align: left;
    font-family: Tahoma,Helvetica,Arial,'宋体',sans-serif;
    font-size: 18px;
}
</style>