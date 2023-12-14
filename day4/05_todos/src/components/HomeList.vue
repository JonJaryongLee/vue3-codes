<script setup>
import ListItem from "./ListItem.vue";

defineProps({
  todos: Array,
})
</script>

<template>
  <ul>
    <li class="todo-li" v-for="todo in todos" :key="todo.id">
      <ListItem :todo="todo" />
    </li>
  </ul>
</template>

<style scoped>
.todo-li {
  display: flex;
  align-items: center;
}
</style>
