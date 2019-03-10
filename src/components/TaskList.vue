<template>
  <div>
    <InsertText
    v-model="newTaskText"
    placeHolder="タスクを入力"
    @keydown.enter="addTask"
    />
    <ul v-if="tasks.length">
      <TaskListItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @click="removeTask">
      </TaskListItem>
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
    InsertText, TaskListItem
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
