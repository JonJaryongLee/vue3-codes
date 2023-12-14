<script setup>
import { computed } from "vue";
import { useTodoStore } from "@/stores/todoStore";

const todoStore = useTodoStore();

const props = defineProps({
  todo: {
    id: Number,
    title: String,
    isCompleted: Boolean,
  },
});

const doneClass = computed(() => (props.todo.isCompleted ? "done" : ""));

function deleteTodo() {
  todoStore.deleteById(props.todo.id);
}
</script>

<template>
  <input
    type="checkbox"
    :checked="todo.isCompleted"
    @input="todoStore.toggleIsCompleted(todo.id)"
  />
  <p :class="doneClass">{{ todo.title }}</p>
  <button @click="deleteTodo">X</button>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
