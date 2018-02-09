<template>
<div>
    <!-- 头部 -->
    <mu-appbar class="info-header" title="我的资料">
        <mu-icon-button class="go-back" icon="keyboard_arrow_left" slot="left" @click="goBack"/>
    </mu-appbar>

    <!-- 头像 -->
    <mu-card class="info-avatar">
        <img src="../assets/images/study_avatar.jpg" alt="">
    </mu-card>  
    <mu-flexbox-item  class="info-flex"/>  

     <!-- 内容 -->
    <div class="info-content">
        <p>昵称</p>
        <mu-text-field class="input-name" underlineClass="input-text" underlineFocusClass="input-text" v-model="valueName"/>
    </div>
    <div class="info-content">
        <p>性别</p>
        <mu-select-field class="info-sex" v-model="valueSex" :labelFocusClass="['label-foucs']" autoWidth underlineClass="input-text" underlineFocusClass="input-text">
            <mu-menu-item v-for="item,index in list" :key="index" :value="index" :title="item" />
        </mu-select-field>
    </div>
    <div class="info-content">
        <p>出生年月</p>
        <mu-date-picker class="info-birthday" inputClass="birthday-label" underlineClass="input-text" underlineFocusClass="input-text" container="inline" v-model="valueBirthday"/> <br/>
    </div>    
    <div class="info-content">
        <p>手机号码</p>
        <mu-text-field type="number" class="info-number" underlineClass="input-text" underlineFocusClass="input-text" v-model="valuePhone"/>
    </div>
    <div class="info-content">
        <p>电子邮箱</p>
        <mu-text-field class="info-email" underlineClass="input-text" underlineFocusClass="input-text" v-model="valueEmail"/>
    </div>     
    <div class="info-content">
        <p>学校名称</p>
        <mu-text-field class="info-school" underlineClass="input-text" underlineFocusClass="input-text" v-model="valueSchool"/>
    </div>
    <div class="info-content">
        <p>专业名称</p>
        <mu-text-field  class="info-major" underlineClass="input-text" underlineFocusClass="input-text" v-model="valueMajor"/>
    </div>    

    <!-- 保存按钮 -->
    <mu-raised-button label="保存" class="info-button" />
</div>
</template>

<script>
    export default {
        data() {
            return {
                valueName: '前端实习生',
                valueBirthday: '',
                valuePhone: '18814122898',
                valueEmail: '631450436@qq.com',
                valueSchool: '广州大学华软软件学院',
                valueMajor: '网络与新媒体',
                valueSex: 0,
                list: ['男','女']
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1);
        }
    }
}

</script>

<style>
/* 资料头部 */
.info-header {
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

/* 资料头像 */
.info-avatar {
    margin-top: -4px;
    height: 200px;  
    background-color: #fdd835;
}
.info-avatar img{
    position:absolute;
    width: 100px;
    height: 100px;
    border-radius: 50px; 
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.info-flex {
    height: 15px;
    background-color: #f5f5f5;
}

/* 填写内容 */
.info-content {
    height: 50px;
    border-bottom: 1px solid #e0e0e0;
}
.info-content p {
    position: absolute;
    margin-left: 5%;
    margin-top: 10px;
    font-family: 'Hiragino Sans GB';
    font-size: 19px;
    font-weight: bold;
    color:#000;
}
.input-name {
    position: absolute;
    margin-top: 1%;
    margin-left: 20%;
    width: 130px;
    font-family: 'Hiragino Sans GB';
    font-size: 18px;
}
.info-sex {
    position: absolute;
    margin-top: 1%;
    margin-left: 33%;
    width: 50px;
}   
.info-birthday {
    position: absolute;
    margin-top: 1%;
    margin-left: 19%;
    width: 100px;
}
.birthday-label {
    font-family: 'Hiragino Sans GB';
    font-size: 18px;
}
.info-number {
    position: absolute;
    margin-top: 1%;
    margin-left: 15%;
    width: 130px;
    font-family: 'Hiragino Sans GB';
    font-size: 18px;
}
.info-email {
    position: absolute;
    margin-top: 1%;
    width: 180px;
    font-family: 'Hiragino Sans GB';
    font-size: 18px;
}
.info-school {
    position: absolute;
    margin-top: 1%;
    width: 180px;
    font-family: 'Hiragino Sans GB';
    font-size: 18px;
}
.info-major {
    position: absolute;
    margin-top: 1%;
    margin-left: 18%;
    width: 130px;
    font-family: 'Hiragino Sans GB';
    font-size: 18px;
}
.input-text {
    display: none;
}

/* 保存按钮 */
.info-button {
    width: 50%;
    font-family: 'Hiragino Sans GB';
    font-size: 19px;
    background-color: #ffb300;
    border-radius: 15px;
    margin-top: 10%;
}
</style>