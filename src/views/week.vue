<template>
<div>
    <!-- 头部 -->
    <mu-appbar class="week-header" title="周报"/>

    <!-- 周报时间 -->
    <mu-card class="week-date">
        <span class="week-time">周报日期：</span>
        <mu-date-picker class="week-start" underlineClass="start-input" inputClass="label-font"/>
        <span>~</span>
        <mu-date-picker class="week-end"  underlineClass="end-input" inputClass="label-font"/>
    </mu-card>

    <!-- 基本信息 -->
    <mu-content-block class="week-message">
        <span class="week-id"> 学号:</span>
        <mu-text-field class="text-width" type="number" underlineClass="under-input" underlineFocusClass="under-focus" inputClass="message-label"/>
        <span class="week-name">姓名:</span>
        <mu-text-field class="text-width" underlineClass="under-input" underlineFocusClass="under-focus" inputClass="message-label"/>
    </mu-content-block>

    <!-- 具体内容 -->
    <mu-flexbox-item  class="tab-flex">
            周报内容
    </mu-flexbox-item>
    <mu-text-field class="week-content" underlineClass="content-input" underlineFocusClass="content-input" inputClass="label-font" multiLine :rows="12"/>

    <!-- 提交按钮 -->
    <mu-raised-button label="提交" class="week-button" />

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

        }
}

</script>

<style>
/* 字体 */
.label-font {
    font-family: 'Hiragino Sans GB';
    font-size: 17px;
}

/* 周报头部 */
.week-header {
    position: fixed;
    top:0;
    color: #000;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    background-color: #fdd835; 
}


/* 周报日期 */
.week-date {
    height: 70px;
    width: 100%;
    margin-top: -1%;
}
.week-date span {
    font-family: 'Hiragino Sans GB';
    font-size: 20px;
}
.week-time {
    display: inline-block;
    margin-left: -2%;
    margin-top: 4%;
}
.week-start {
    display: inline-block;
    width: 110px;
    height:30px;
}
.start-input, .end-input {
    width: 100px;
}
.week-end {
    display: inline-block;
    width: 110px;
    height:30px;
    padding-left: 5%;
}

/* 基本信息 */
.week-message {
    box-sizing: content-box;
    margin-top: 2%;
}
.week-id {
    margin-left:-2%;
    font-family: 'Hiragino Sans GB';
    font-size: 20px;
}
.under-input {
    width:120px;
}
.under-focus {
    width:120px;
    background-color: #ffb300;
}
.message-label {
    font-family: 'Hiragino Sans GB';
    font-size: 19px;
}
.text-width {
    width: 130px;
    padding-left: 2%;
}
.week-name {
    padding-left: 5%;
    font-family: 'Hiragino Sans GB';
    font-size: 20px;
}

/* 周报内容 */
.tab-flex {
  height: 45px;
  padding-left: 2%;
  font-size: 18px;
  font-weight: bold; 
  line-height: 45px;
  text-align: left;
  background-color: #f5f5f5;
  border-top: 3px solid #e0e0e0;
}
.week-content {
    width: 100%;
    border: 1px solid #9e9e9e;
}
.content-input {
    display: none;
}

/* 提交按钮 */
.week-button {
    width: 50%;
    font-family: 'Hiragino Sans GB';
    font-size: 19px;
    background-color: #ffb300;
    border-radius: 15px;
    margin-top: 3%;
}
</style>