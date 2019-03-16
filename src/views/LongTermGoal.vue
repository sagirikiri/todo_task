<template>
  <div id="longTermGoal">
    <h1>Long Term Goalのページ</h1>
    <UserList />
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue'
export default {
  name: 'LongTermGoal',
  components: {
    UserList
  }
}
</script>
