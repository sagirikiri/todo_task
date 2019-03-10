<template>
  <div id="TodayGoal">
    <h1>Today Goalのページ</h1>
    <insertText />
  </div>
</template>
<script>
import InsertText from '@/components/InsertText.vue'

export default {
  name: 'TodayGoal',
  components: {
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
