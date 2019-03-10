<template>
  <li>
    {{ task.text }}
    <button @click="$emit('removeTask, task.id')">
      [削除]
    </button>
  </li>
</template>

<script>
export default{
  props: {
    task: {
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        removeTask: event => this.$emit('removeTask', event.target.value)
      }
    }
  }
}
</script>
