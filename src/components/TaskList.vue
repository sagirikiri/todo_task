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
      <tr v-for = "(post, key) in posts" :key="post.value">
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
          <button v-on:click="removeTask(key)">
            [削除]
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import firebase from '@/firebase/index.js'

export default {
  components: {

  },
  data () {
    return {
      database: null,
      posts: null,
      newTaskText: '',
      _createdAt: '',
      _updatedAt: '',
      status: '',
      targetYmd: ''
    }
  },
  created () {
    this.database = firebase.database()
    this.posts = this.database.ref('posts')
    var self = this,
        now = new Date(),
        today = now.toLocaleDateString();

    this.posts.on('value', function(snapshot) {
      self.posts = snapshot.val(); // データに変化が起きたときに再取得する
    });
  },
  methods: {
    addTask (newTaskText, targetYmd) {
      const trimmedText = this.newTaskText.trim()
      let deadline = this.targetYmd
      if (trimmedText) {
        this.posts.push({
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
    removeTask: function(key) {
      console.log(key);
      this.database.ref('posts').child(key).remove();
    }
  }
}
</script>
