/* eslint-disable */
<template>
  <div id="app">
    <com-header/>
    <router-view/>
    <TaskList />
  </div>
</template>

<script>
import ComHeader from '@/components/ComHeader.vue'
import InsertText from '@/components/InsertText.vue'
import TaskList from '@/components/TaskList.vue'
export default {
  name: 'App',
  components: {
    ComHeader,
    InsertText,
    TaskList
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
