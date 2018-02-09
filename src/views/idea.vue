<template>
<div>
    <!-- 头部 -->
    <mu-appbar class="idea-header" title="动态详情">
        <mu-icon-button class="go-back" icon="keyboard_arrow_left" slot="left" @click="goBack"/>
    </mu-appbar>

    <!-- 内容 -->
    <div class="idea-content">
        <img src="../assets/images/study_avatar.jpg" alt="">
        <span class="idea-title">前端实习生</span>
        <p>好想找一份前端工作，学会使用vue.js和node.js!</p>
        <span>2018-3-20</span>
    </div>
    <mu-flexbox-item  class="idea-flex"/>

    <!-- 评论 -->
    <div class="idea-comment">
        <p>评论 1 条</p>
        <mu-divider/>
        <div class="comment-content">
            <img src="../assets/images/idea_avatar.jpg" alt="">
            <p class="comment-title">前端大牛</p>
            <p class="comment-review">要从基础学起。</p>
            <p class="comment-time">3-21 12:00</p>
        </div>
        <mu-divider/>
    </div>
    
    <!-- 发送 -->
    <div class="comment-send">
        <img src="../assets/images/idea_comment.png" alt="">
        <mu-text-field hintText="输入你想评论的内容" class="comment-text" underlineFocusClass="comment-color" hintTextClass="comment-hint"/>
        <mu-raised-button label="发送" class="comment-button" />
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
/* 动态头部 */
.idea-header {
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

/* 动态内容 */
.idea-content {
    height: 180px;
}
.idea-content img {
    float: left;
    margin-left: 3%;
    margin-top: 3%;
    width: 50px;
    height: 50px;
    border-radius: 50px;
}
.idea-title {
    display: inline-block;
    clear: both;
    margin-top: 5%;
    margin-left: -55%;
    font-size: 19px;
    font-weight: bold;
}
.idea-content p {
    text-align: left;
    margin-top: 8%;
    text-indent: 5%;
    font-family: Tahoma,Helvetica,Arial,'宋体',sans-serif;
    font-size: 18px;
}
.idea-content :last-child {
    display: inline-block;
    margin-left: 75%;
    font-family: 'Hiragino Sans GB';
    font-size: 15px;
    color: #000;
}
.idea-flex {
    height: 20px;
    background-color: #f5f5f5;
}

/* 动态评论 */
.idea-comment > p {
    font-family: 'Hiragino Sans GB';
    font-size: 17px;
    text-align: left;
    text-indent: 4%;
    color: #000;
}
.comment-content {
    position: relative;
    height: 80px;
    margin-top: 2%;
}
.comment-content img {
    position: absolute;
    margin-left: -47%;
    margin-top: 2%;
    width: 50px;
    height: 50px;
    border-radius: 50px;
}
.comment-title {
    position: absolute;
    margin-left: 20%;
    margin-top: 1%;;
    font-size: 17px;
    font-weight: bold;
}
.comment-review {
    position: absolute;
    margin-top: 8%;
    margin-left: 20%;
    font-family: 'Hiragino Sans GB';
    font-size: 17px;
    color:#000;
}
.comment-time {
    position: absolute;
    color:#000;
    margin-top: 8%;
    margin-left: 80%;
}

/* 发表评论 */
.comment-send {
    position: relative;
    width: 100%;
    height: 60px;
    margin-top: 64%;
    margin-left: -1%;
    
}
.comment-send img {
    position: absolute;
    margin-left: -45%;
    margin-top: 2%;
    width: 35px;
    height: 35px;
}
.comment-text {
    position: absolute;
    margin-left: -35%;
    margin-top: 1%;
}
.comment-color {
    background-color: #fdd835;
}
.comment-hint {
    text-align: left;
}
.comment-button {
    position: absolute;
    margin-left: 28%;
    margin-top: 2%;
    font-family: 'Hiragino Sans GB';
    font-size: 19px;
    background-color: #ffb300;
    border-radius: 20px;
}
</style>