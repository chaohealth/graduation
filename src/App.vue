<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <bottom-nav/>
  </div>
</template>

<script>
import bottomNav from './components/bottom-nav'

export default {
  name: 'App',
  components: {
    bottomNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
