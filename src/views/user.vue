<template>
<div>
<!-- 头部 -->
    <mu-appbar class="user-header" title="我的"/>

<!-- 状态 -->
    <mu-card class="user-info">
        <img src="../assets/images/user-avatar.png"/>
        <p @click="goLogin">登录/注册</p>
    </mu-card>

<!-- 选项 -->
    <mu-list class="user-list">
        <mu-list-item @click="goInfo">
            <img class="list-img" src="../assets/images/user_info.png" alt="">
            <span class="list-title">个人资料</span>
            <mu-icon class="list-icon" value="keyboard_arrow_right"/>
        </mu-list-item>
        <mu-divider/>
        <mu-list-item @click="goMessage">
            <img class="list-img" src="../assets/images/user_message.png" alt="">
            <span class="list-title">我的消息</span>
            <mu-icon class="list-icon" value="keyboard_arrow_right"/>
        </mu-list-item>
        <mu-divider/>
        <mu-list-item @click="goNote">
            <img class="list-img" src="../assets/images/user_note.png" alt="">
            <span class="list-title">我的周报</span>
            <mu-icon class="list-icon" value="keyboard_arrow_right"/>
        </mu-list-item>
        <mu-divider/>     
        <mu-list-item @click="goBind">
            <img class="list-img" src="../assets/images/user_teacher.png" alt="">
            <span class="list-title">绑定教师</span>
            <mu-icon class="list-icon" value="keyboard_arrow_right"/>
        </mu-list-item>
        <mu-divider/>
    </mu-list>

    <!-- 退出登录 -->
    <mu-flat-button class="user-exit" label="退出登录" labelClass="exit-label"/>

    <!-- 底部导航 -->
    <bottom-nav/>
</div>
</template>

<script>
import bottomNav from '@/components/bottom-nav'

    export default {
        data() {
            return {}
        },
        components: {
            bottomNav
        },
        methods: {
            goLogin() {
                this.$router.push('/login');
        },
            goInfo() {
                this.$router.push('/info')
        },
            goMessage() {
                this.$router.push('/message')
        }, 
            goNote() {
                this.$router.push('/note')
        },   
            goBind() {
                this.$router.push('/bind')
        },                  
    }
}

</script>

<style>
/* 头部 */
.user-header {
    position: fixed;
    top:0;
    color: #000;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    background-color: #fdd835; 
}

/* 基本信息 */
.user-info {
    margin-top: -4px;
    height: 250px;  
    background: url('../assets/images/user_background.png') fixed ;
}
.user-info img{
    width: 100px;
    height: 100px;
    margin-top: 10%;
}
.user-info p {
    font-family: 'Hiragino Sans GB';
    font-size: 20px;
    color: #000;
    margin-left: 1%;
    margin-top: 1%;
}


/* 各类信息 */
.user-list {
    margin-top: 5%;
}
.list-img {
    position: absolute;
    margin-top: 2px;
    margin-left: -57%;
    width: 30px;
    height: 30px
}
.list-title{
    position: relative;
    margin-left: -50%;
    font-family: 'Hiragino Sans GB';
    font-size: 20px;
}
.list-icon {
    float: right;
    margin-top: 1%;
}


/* 退出 */
.user-exit {
    margin-top: 4%;
    width: 100%;
}
.exit-label {
    font-family: 'Hiragino Sans GB';
    font-size: 20px;
}
</style>