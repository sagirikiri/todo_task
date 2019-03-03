import Vue from 'vue'
import Router from 'vue-router'

import TodayGoal from '@/views/TodayGoal.vue'
import LongTermGoal from '@/views/LongTermGoal.vue'
import PastDataList from '@/views/PastDataList.vue'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodayGoal',
      component: TodayGoal
    },
    {
      path: '/long-term-goal',
      name: 'LongTermGoal',
      component: LongTermGoal
    },
    {
      path: '/past-data-list',
      name: 'PastDataList',
      component: PastDataList
    }
  ]
})
