<template>
<div>
    <!-- 头部 -->
    <mu-appbar class="note-header" title="我的周报">
        <mu-icon-button class="go-back" icon="keyboard_arrow_left" slot="left" @click="goBack"/>
    </mu-appbar>

    <!-- 标题 -->
    <mu-card class="note-card">
        <img src="../assets/images/note_time.png" alt="">
        <p>周报列表</p>
    </mu-card>
    <mu-flexbox-item  class="note-flex"/>

    <!-- 内容 -->
    <div class="note-first">
        <p>2018-3-09 ~ 2018-3-17</p>
        <pre> 1. 勤于动手 
  我们看完了书面他人的东西，想要变成自己的内在的知识是需要练习的，如果一直像之前学完，我知道了有这个内容，而不去使用是不会成长的。我们将例子自己动手打一遍，自己再拓展一下才能掌握。前端是需要经验的，而经验的累计是需要靠自己摸索的。背完单词，试着写写文章，才可以说真正理解单词了。
 2. 代码首先是给人看的，再是给机器看的
  这句话对于前端来说很重要，和服务器的对接，和其他伙伴的合作，符合规范、书写注释都是很必要的，养成良好的习惯，利己利人。 
 3.多学习
  网上博客，免费的课程都很多，不会了自己多想办法解决。
        </pre>
    </div>
        <div class="note-second">
        <p>2018-3-01 ~ 2018-3-08</p>
        <pre>    这周开始在导师的带领下尝试些功能点。
    因为以前没有真切接触过nodejs开发，尽管看了一些教程，但水平远远不够。只是让我写一个小接口，也用了整整一天时间。但是主要是功能点虽然不麻烦，但是涉及到的插件及库都没有接触过，所以必须不断百度，理清代码。而且代码弄清楚后，尽管知道实现功能的思路，但就是不知道该怎么下手。不过总算是挣扎着写出了代码。
        </pre>
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
/* 周报头部 */
.note-header {
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

/* 周报标题 */
.note-card {
    margin-top: -2px;
    height: 40px;
    border-top: 1px solid #e0e0e0;
    border-left: 2px solid #e0e0e0;
    border-right: 2px solid #e0e0e0;
}
.note-card img {
    display: inline-block;
    position: absolute;
    margin-left: -47%;
    margin-top: 1%;
    width: 30px;
    height: 30px;
}
.note-card p {
    display: inline-block;
    position: absolute;
    margin-left: -40%;
    margin-top: 1%;
    width: 120px;
    font-size: 22px;
    text-indent: 2%;
    text-align: left;
    letter-spacing: 4px;
    color: #000;
}
.note-flex {
    height: 20px;
    background-color: #f5f5f5;
}

/* 周报内容 */
.note-first {
    height: 490px;
    border: 1px solid #e0e0e0;
}
.note-first :first-child {
    margin-top: 1%;
    text-align: left;
    text-indent: 5px;
    font-family: 'Hiragino Sans GB';
    font-size: 20px;
    color: #000
}
.note-first pre {
    text-align: left;
    font-family: 'Hiragino Sans GB';
    font-size: 18px;
    color: #000;
}
.note-second {
    height: 330px;
    margin-top: 5%;
    border: 1px solid #e0e0e0;
}
.note-second :first-child {
    margin-top: 1%;
    text-align: left;
    text-indent: 5px;
    font-family: 'Hiragino Sans GB';
    font-size: 20px;
    color: #000
}
.note-second pre {
    text-align: left;
    font-family: 'Hiragino Sans GB';
    font-size: 18px;
    color: #000;
}
</style>