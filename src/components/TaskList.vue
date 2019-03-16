<template>
  <v-app Id= "taskList">
    <div>
      <v-btn v-on:click="callComponent(editTask)">
        登録!
      </v-btn>
    </div>
    <v-expansion-panel>
      <v-expansion-panel-content
        v-for = "(post, key) in posts"
         :key = "post.value"
      >
        <template v-slot:header>
          <div>{{ post.content }}</div>
        </template>
        <v-card>
          <v-card-text>
            ここにはいるようなのほしいな。
          </v-card-text>
          <v-card-actions>
            <span class="targetYmd"> 締切日: {{post.targetYmd}} </span>
            <v-btn color="success" v-on:click="removeTask(post, key)" >削除</v-btn>
            <v-btn color="Warning" v-on:click="updateTask(post,key)">更新</v-btn>
          </v-card-actions>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-app>
</template>

<script>
import firebase from '@/firebase/index.js'
import editTask from '@/components/editTask.vue'

export default {
  data () {
    return {
      database: null,
      posts: [],
      newTaskText: '',
      creaitionDate: '',
      updateDate: '',
      status: '',
      targetYmd: this.today,
      today: ''
    }
  },
  created () {
    var self = this,
      now = new Date()

    this.database = firebase.database()
    this.posts = this.database.ref('posts')
    this.today = now.toLocaleDateString()

    this.posts.on('value', function (snapshot) {
      self.posts = snapshot.val() // データに変化が起きたときに再取得する
    })
  },
  methods: {
    addTask: function (newTaskText, targetYmd) {
      let trimmedText = this.newTaskText.trim()
      let deadline = this.targetYmd
      if (trimmedText) {
        this.database.ref('posts').push({
          creationDate: this.today,
          updateDate: targetYmd,
          content: trimmedText,
          status: 'ongoing',
          targetYmd: deadline,
          isRemoved: false
        })
        alert(trimmedText + 'を保存しました!')
        this.newTaskText = ''
        this.targetYmd = ''
      }
    },
    removeTask: function (post, key) {
      post.isRemoved = true
      this.database.ref('posts').child(key).update(post)
    }
  }
}
</script>