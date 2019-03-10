<template>
  <div id="userList">
    <button v-on:click="getUserList()"></button>
    <div> {{ kazuo }}</div>
  </div>
</template>

<script>
import firebase from '@/firebase/index.js'

export default {
  data () {
    return {
      list: 'test',
      kazuo: '初期値'
    }
  },
  methods: {
    getUserList: () => {
      const database = firebase.database()
      let dbRef = database.ref('users')
      let self = this
      dbRef.once('value')
        .then((snapshot) => {
          self.kazuo = snapshot.child('kumada').child('userName').val()
        })
    }
  }
}
</script>
