<template>
  <div>
    <h2>Todos</h2>
    <ul>
      <li v-for="(todo, index) in technicalQuestions" :key="index">
        <input :checked="todo.done" type="checkbox" @change="toggle(todo)">
        <span :class="{ done: todo.done }">
          {{ todo.text }}
        </span>
      </li>
      <li><input placeholder="What needs to be done?" @keyup.enter="addTodo"></li>
    </ul>
    <NuxtLink to="/">
      Home
    </NuxtLink>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    technicalQuestions: 'technical-questions/technical-questions'
  }),
  methods: {
    addTodo (e) {
      const text = e.target.value
      if (text.trim()) {
        this.$store.commit('technical-questions/add', { text })
      }
      e.target.value = ''
    },
    // ...mapMutations({
    //   toggle: 'todos/toggle'
    // })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
