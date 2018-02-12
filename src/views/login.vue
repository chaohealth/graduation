<template>
<div class="login-background">
    <img class="login-logo" src="../assets/images/login_logo.png" alt="">

    <!-- 条件 -->
    <img class="user-img" src="../assets/images/login_user.png" alt="">
    <mu-text-field class="user-text" hintText="用户名"  underlineFocusClass="input-color" hintTextClass="input-hint" />
    <img class="password-img" src="../assets/images/login_password.png" alt="">
    <mu-text-field class="password-text" type="password" hintText="密码"  underlineFocusClass="input-color" hintTextClass="input-hint" />       

    <!-- 选择 -->
    <mu-radio label="学生" class="radio-first" nativeValue="student" labelClass="radio-label" iconClass="radio-icon" v-model="loginValue" labelRight/>
    <mu-radio label="教师" class="radio-second" nativeValue="teacher" labelClass="radio-label" iconClass="radio-icon" v-model="loginValue" labelRight/>

    <!-- 按钮 -->
    <mu-raised-button label="登录" class="login-button" @click="showToast"/>
    <mu-toast v-if="toast" message="登录成功" @close="hideToast"/>
    
    <!-- 提示 -->
    <p class="login-register" @click="goRegister">注册账号 ></p>
</div>

</template>

<script>
    export default {
        data() {
            return {
                toast: false,
                loginValue: '',
            }
        },
        methods: {
            showToast () {
                this.toast = true;
                if (this.toastTimer) clearTimeout(this.toastTimer);
                this.toastTimer = setTimeout(() => { this.toast = false }, 1000);
                // this.$router.push('/home');
            },
            hideToast () {
                this.toast = false;
                if (this.toastTimer) clearTimeout(this.toastTimer);
            },
            goRegister() {
                this.$router.push('/register');
            }
        }
}

</script>

<style>
/* 背景 */
.login-background {
    position: relative;
    margin-top: -30%;
    height: 800px;
    background-image: url(../assets/images/login_background.jpg);
    background-attachment: fixed;
}
.login-logo {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%,-50%);
    width:120px;
    height:120px;
}

/* 登录输入 */
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

/* 登录选择 */
.radio-first {
    position: absolute;
    margin-top: 120%;
    margin-left: -30%;
    width: 80px;
    height: 40px;
}
.radio-second {
    position: absolute;
    margin-top: 120%;
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

/* 登录按钮 */
.login-button {
    position: absolute;
    top: 72%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 30px;
    width: 50%;
    font-family: 'Hiragino Sans GB';
    font-size: 19px;
    background-color: #fff;
    border-radius: 15px;
}

/* 提示注册 */
.login-register {
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-family: 'Hiragino Sans GB';
    font-size: 20px;
    color: #fff;
}
</style>