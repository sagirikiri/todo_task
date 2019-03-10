<template>
  <div>
    <div>
      <input type="text" class="input" :value="value"  />
    </div>
    <ul v-if="tasks.length">
      <li>
        {{ task.text }}
        <button @click="$emit('removeTask, task.id')">
          [削除]
        </button>
      </li>
    </ul>
    <p v-else>タスクを追加してください</p>
  </div>
</template>

<script>
import InsertText from './InsertText.vue'
import TaskListItem from './TaskListItem.vue'

let nextTaskId = 1

export default {
  components: {
    InsertText
  },
  data () {
    return {
      newTaskText: '',
      tasks: []
    }
  },
  methods: {
    addTask () {
      const trimmedText = this.newTaskText.trim()
      if (trimmedText) {
        this.tasks.push({
          id: nextTaskId++,
          text: trimmedText
        })
        this.newTaskText = ''
      }
    },
    removeTask (taskId) {
      console.log(this.todos)
      this.tasks = this.tasks.filter(task => {
        return task.id !== taskId
      })
    }
  }
}
</script>
