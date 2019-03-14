<template>
  <div Id= "ListTasks">
    <div>
      <input type="text" class="input" v-model="newTaskText" />
      <input type="date" name="" v-model="targetYmd" />
      <button v-on:click="addTask(newTaskText,targetYmd)">登録!</button>
    </div>
    <table>
      <thead>
      <tr>
          <th class="id">タイトル</th>
          <th class="comment">締切</th>
          <th class="state">状態</th>
          <th class="button">削除</th>  
      </tr>
      </thead>
      <tr v-for = 'post in posts' >
        <td>
          {{ post.content }}
        </td>
        <td>
          {{ post.targetYmd }}
        </td>
        <td>
          {{ post.status }}
        </td>
        <td>
          <button v-on:click="removeTask(post.uid)">
            [削除]
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import firebase from '@/firebase/index.js'

const FIREBASE = firebase.database()
let posts = FIREBASE.ref('posts')
let today = new Date()

export default {
  components: {

  },
  data () {
    return {
      posts: null,
      newTaskText: '',
      _createdAt: '',
      _updatedAt: '',
      status: '',
      targetYmd: ''
    }
  },
  created () {
    posts.on('value', (snapshot) => {
       this.posts = snapshot.val()
    })
  },
  methods: {
    addTask (newTaskText, targetYmd) {
      const trimmedText = this.newTaskText.trim()
      let deadline = this.targetYmd
      if (trimmedText) {
        posts.push({
          _createdAt: today,
          _updatedAt: targetYmd,
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
    removeTask (taskId) {
      removedPost = this.posts.filter(item => item.uid = taskId)
      removedPost.isRemoved = true
    }
  }
}
</script>
