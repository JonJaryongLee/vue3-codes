<script setup>
import HomeInputGroup from "@/components/HomeInputGroup.vue";
import HomeList from "@/components/HomeList.vue";
import { ref, computed } from "vue";
import { useTodoStore } from "@/stores/todoStore";

const todoStore = useTodoStore();

const hideCompleted = ref(false);
const filteredTodos = computed(() =>
  hideCompleted.value
    ? todoStore.todos.filter((todo) => !todo.isCompleted)
    : todoStore.todos
);
const buttonText = computed(() =>
  hideCompleted.value ? "전체" : "완료된 항목 숨기기"
);
</script>

<template>
  <h1>Todo List</h1>
  <HomeInputGroup />
  <template v-if="filteredTodos.length">
    <HomeList :todos="filteredTodos" />
    <button @click="hideCompleted = !hideCompleted">{{ buttonText }}</button>
  </template>
  <p v-else>할 일이 없습니다.</p>
</template>

<style scoped></style>
