<template>
<div>
    <!-- 头部 -->
    <mu-appbar class="add-header" title="发表">
        <mu-icon-button class="go-back" icon="keyboard_arrow_left" slot="left" @click="goBack"/>
    </mu-appbar>

    <!-- 内容 -->
    <mu-text-field class="add-content" hintText="分享实习想法..." hintTextClass="add-hinttext" underlineClass="content-input" underlineFocusClass="content-input" inputClass="label-font" multiLine :rows="8"/>
    
    <!-- 发表 -->
    <mu-raised-button label="发送" class="send-button" />
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
/* 字体 */
.label-font {
    font-family: 'Hiragino Sans GB';
    font-size: 17px;
}

/* 发表头部 */
.add-header {
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

/* 发表内容 */
.add-content {
    width: 100%;
    border-bottom: 1px solid #a1887f;
}
.content-input {
    display: none;
}
.add-hinttext {
    font-family: 'Hiragino Sans GB';
    font-size: 19px;
    text-align: left;
    text-indent: 4px;
}

/* 发表按钮 */
.send-button {
    width: 50%;
    font-family: 'Hiragino Sans GB';
    font-size: 19px;
    background-color: #ffb300;
    border-radius: 15px;
    margin-top: 3%;
}
</style>