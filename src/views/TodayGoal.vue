<template>
  <div id="TodayGoal">
    <h1>Today Goalのページ</h1>
    <Task-List />
  </div>
</template>
<script>

import TaskList from '@/components/TaskList.vue'

export default {
  name: 'TodayGoal',
  components: {
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
