<template>
  <div Id= "taskList">
    <div>
      <input type="text" name = "" class="inputTitle" v-model="newTaskText" />
      <input type="date" name = "締切" v-model="targetYmd" />
      <button v-on:click="addTask(newTaskText,targetYmd)">登録!</button>
    </div>
    <table>
      <thead>
        <tr>
            <th class="id">タイトル</th>
            <th class="comment">締切</th>
            <th class="state">状態</th>
            <th class="state">削除</th>
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
          <button v-on:click="removeTask(post, key)">
            [削除]
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import firebase from '@/firebase/index.js'
import appConst from '@/const.js'
import util from '@/util.js'

export default {
  data () {
    return {
      database: null,
      posts: [],
      newTaskText: '',
      creaitionDate: '',
      updateDate: '',
      status: '',
      targetYmd: '',
      today: ''
    }
  },
  created () {
    // データの初期化
    this.database = firebase.database()
    this.posts = this.database.ref('posts')
    this.targetYmd = util.getTodayYmd(appConst.YMDFORMAT_YYYYMMDD_HYPHEN)
    this.today = util.getTodayYmd(appConst.YMDFORMAT_YYYYMMDD_HYPHEN)

    // データベース監視処理
    var self = this
    this.posts.on('value', function (snapshot) {
      self.posts = snapshot.val() // データに変化が起きたときに再取得する
    })
  },
  methods: {
    addTask: function (newTaskText, targetYmd) {
      let trimmedText = this.newTaskText.trim()
      if (trimmedText) {
        this.database.ref('posts').push({
          creationDate: this.today,
          updateDate: targetYmd,
          content: trimmedText,
          status: appConst.TASK_STATUS_WAITING,
          targetYmd: this.targetYmd,
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