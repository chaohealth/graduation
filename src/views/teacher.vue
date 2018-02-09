<template>
<div>
    <!-- 头部 -->
    <mu-appbar class="teacher-header" title="教师界面">
        <mu-flat-button labelClass="teacher-exit" label="退出" slot="right" @click="goHome"/>
    </mu-appbar>

    <!-- 列表 -->
    <mu-table :showCheckbox="showCheckbox">
        <mu-thead>
            <mu-tr>
                <mu-th>学号</mu-th>
                <mu-th>姓名</mu-th>
                <mu-th>内容</mu-th>
                <mu-th>日期</mu-th>
            </mu-tr>
        </mu-thead>
        <mu-tbody>
            <mu-tr>
                <mu-td>1440624104</mu-td>
                <mu-td>尤雨西</mu-td>
                <mu-td class="teacher-content">第一天实习真开心</mu-td>
                <mu-td>2018-03-20</mu-td>
            </mu-tr>
            <mu-tr>
                <mu-td>1440624104</mu-td>
                <mu-td>尤雨西</mu-td>
                <mu-td class="teacher-content">第一天实习</mu-td>
                <mu-td>2018-03-20</mu-td>
            </mu-tr>
            <mu-tr>
                <mu-td>1440624104</mu-td>
                <mu-td>尤雨西</mu-td>
                <mu-td class="teacher-content">第一天实习</mu-td>
                <mu-td>2018-03-20</mu-td>
            </mu-tr>
            <mu-tr>
                <mu-td>1440624104</mu-td>
                <mu-td>尤雨西</mu-td>
                <mu-td class="teacher-content">第一天实习</mu-td>
                <mu-td>2018-03-20</mu-td>
            </mu-tr>
        </mu-tbody>
    </mu-table>
</div>
</template>

<script>
    export default {
        data() {
            return {
                showCheckbox: false,
            }
        },
        methods: {
            goHome() {
                this.$router.push('/home');
            }
        }
}

</script>

<style>
/* 头部 */
.teacher-header {
    position: fixed;
    top:0;
    color: #000;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    background-color: #fdd835; 
    text-align: left;
}
.teacher-exit {
    font-family: 'Hiragino Sans GB';
    font-size: 20px;
}

/* 周报列表 */
.mu-th {
    padding-left: 7px;
    font-family: 'Hiragino Sans GB';
    font-size: 18px;
    color: #000;
}
.mu-td {
    padding-left: 4px;
    font-family: 'Hiragino Sans GB';
    font-size: 15px;
    color: #000;
}
.teacher-content {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>