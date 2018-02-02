<template>
    <mu-paper class="bottom-nav">
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
            <mu-bottom-nav-item value="首页" title="首页"  to="/home">
              <img class="nav-icon" src="../assets/images/home_icon.png" alt="">
            </mu-bottom-nav-item>
            <mu-bottom-nav-item value="周报" title="周报" to="/week">
              <img class="nav-icon" src="../assets/images/week_icon.png" alt="">
            </mu-bottom-nav-item>           
            <mu-bottom-nav-item value="我的" title="我的" to="/user">
              <img class="nav-icon" src="../assets/images/user_icon.png" alt="">
            </mu-bottom-nav-item>            
        </mu-bottom-nav>
    </mu-paper>
</template>

<script>
export default {
    data() {
        return {}
    },
    computed: {
        bottomNav() {
            return this.$store.state.tabValue;
        }
    },
    methods: {
        handleChange(val) {
            this.$store.dispatch('changeTabValue', val);
        }
    }
}

</script>

<style>

.bottom-nav{
    position:fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    table-layout: fixed;
}

.nav-icon {
    width: 24px;
    height: 24px;
}

.mu-buttom-item{
    color: #714406;
}

</style>