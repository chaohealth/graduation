<template>
<div class="register-background">
    <img class="register-logo" src="../assets/images/login_logo.png" alt="">

    <!-- 条件 -->
    <img class="user-img" src="../assets/images/login_user.png" alt="">
    <mu-text-field class="user-text" hintText="用户名"  underlineFocusClass="input-color" hintTextClass="input-hint" />
    <img class="password-img" src="../assets/images/login_password.png" alt="">
    <mu-text-field class="password-text" type="password" hintText="密码"  underlineFocusClass="input-color" hintTextClass="input-hint" />       
    <img class="confirm-img" src="../assets/images/login_confirm.png" alt="">
    <mu-text-field class="confirm-text" type="password" hintText="确认密码"  underlineFocusClass="input-color" hintTextClass="input-hint" />
    
    <!-- 选择 -->
    <mu-radio label="学生" class="radio-one" nativeValue="student" labelClass="radio-label" iconClass="radio-icon" v-model="RegisterValue" labelRight/>
    <mu-radio label="教师" class="radio-two" nativeValue="teacher" labelClass="radio-label" iconClass="radio-icon" v-model="RegisterValue" labelRight/>

    <!-- 按钮 -->
    <mu-raised-button label="注册" class="register-button" @click="goHome"/>
    
    <!-- 提示 -->
    <p class="register-login" @click="goLogin">已有账号,登录 ></p>
</div>

</template>

<script>
    export default {
        data() {
            return {
                RegisterValue:''
            }
        },
        methods: {
            goHome() {
                this.$router.push('/home');
            },
            goLogin() {
                this.$router.push('/login');
            }
        }
}

</script>

<style>
/* 背景 */
.register-background {
    position: relative;
    margin-top: -30%;
    height: 800px;
    background-image: url(../assets/images/login_background.jpg);
    background-attachment: fixed;
}
.register-logo {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%,-50%);
    width:120px;
    height:120px;
}

/* 注册输入 */
.user-img {
    position: absolute;
    margin-top: 89%;
    margin-left: -30%;
    width: 20px;
    height: 25px;
}
.user-text {
    position: absolute;
    margin-top: 87%;
    margin-left: -20%;
    width: 200px;
}
.input-color {
    background-color: #fff;
}
.input-hint {
    font-family: 'Hiragino Sans GB';
    font-size: 18px;
    text-align: left;
    text-indent: 5px;
}
.password-img {
    position: absolute;
    margin-top: 106%;
    margin-left: -30%;
    width: 20px;
    height: 25px;
}
.password-text {
    position: absolute;
    margin-top: 104%;
    margin-left: -20%;
    width: 200px;
}
.confirm-img {
    position: absolute;
    margin-top: 123%;
    margin-left: -30%;
    width: 20px;
    height: 25px;
}
.confirm-text {
    position: absolute;
    margin-top: 121%;
    margin-left: -20%;
    width: 200px;
}

/* 注册选择 */
.radio-one {
    position: absolute;
    margin-top: 136%;
    margin-left: -30%;
    width: 80px;
    height: 40px;
}
.radio-two {
    position: absolute;
    margin-top: 136%;
    margin-left: -5%;
    width: 80px;
    height: 40px;
}
.radio-label {
    font-family: 'Hiragino Sans GB';
    font-size: 18px;
    color: #fff8e1;
}
.radio-icon {
    color: #fff;
}

/* 注册按钮 */
.register-button {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 30px;
    width: 50%;
    font-family: 'Hiragino Sans GB';
    font-size: 19px;
    background-color: #fff;
    border-radius: 15px;
}

/* 提示登录 */
.register-login {
    position: absolute;
    top: 82%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-family: 'Hiragino Sans GB';
    font-size: 20px;
    color: #fff;
}
</style>