<script setup>
import { ref } from "vue";
import { useTodoStore } from "@/stores/todoStore";

const todoStore = useTodoStore();

const userInput = ref("");

function addTodo() {
  if (userInput.value) {
    todoStore.save(userInput.value);
    userInput.value = "";
  }
}
</script>

<template>
  <input
    type="text"
    placeholder="할 일을 입력하세요"
    v-model="userInput"
    @keyup.enter="addTodo"
  />
  <button @click="addTodo">추가</button>
</template>

<style scoped></style>
