/* eslint-disable */
<template>
  <div id="app">
    <com-header/>
    <router-view/>
  </div>
</template>

<script>
import ComHeader from '@/components/ComHeader.vue'
import InsertText from '@/components/InsertText.vue'
export default {
  name: 'App',
  components: {
    ComHeader,
    InsertText
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
