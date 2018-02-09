<template>
<div>
    <!-- 头部 -->
    <mu-appbar class="teacher-header" title="我的教师">
        <mu-icon-button class="go-back" icon="keyboard_arrow_left" slot="left" @click="goBack"/>
    </mu-appbar>

    <!-- 内容 -->
    <div class="bind-content">
        <img src="../assets/images/bind_teacher.png" alt="">
        <mu-text-field hintText="教师账号" class="bind-text" underlineFocusClass="bind-color" hintTextClass="bind-hint"/>
        <mu-raised-button label="绑定" class="bind-button" @click="goTeacher"/>
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
        },
            goTeacher() {
                this.$router.push('/teacher');
        }
    }
}

</script>

<style>
/* 绑定头部 */
.teacher-header {
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

/* 绑定教师 */
.bind-content {
    position: relative;
    height: 200px;
}
.bind-content img {
    position: absolute;
    margin-left: -47%;
    margin-top: 7%;
    width: 50px;
    height: 50px;
}
.bind-text {
    position: absolute;
    margin-left: -32%;
    margin-top: 10%;
    width: 210px;
}
.bind-color {
    background-color: #fdd835;
}
.bind-hint {
    font-family: 'Hiragino Sans GB';
    font-size: 20px;
    text-align: left;
}
.bind-button {
    position: absolute;
    margin-left: 26%;
    margin-top: 11%;
    font-family: 'Hiragino Sans GB';
    font-size: 19px;
    background-color: #ffb300;
    border-radius: 20px;
}
</style>