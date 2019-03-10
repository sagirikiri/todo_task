<template>
  <div id="TodayGoal">
    <h1>Today Goalのページ</h1>
  </div>
</template>
<script>
import InsertText from '@/components/InsertText.vue'
import TaskList from '@/components/TaskList.vue'
import TaskListItem from '@/components/TaskListItem.vue'
export default {
  name: 'TodayGoal',
  components: {
    InsertText,
    TaskList,
    TaskListItem
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
