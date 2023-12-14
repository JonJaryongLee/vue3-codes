<script setup>
import { ref } from "vue";

const todos = ref([]);
const URL = "https://jsonplaceholder.typicode.com/todos";

async function dataFetch() {
  try {
    const response = await fetch(URL, { method: "GET" });
    console.log(response);
    const jsonData = await response.json();
    console.log(jsonData);
    todos.value = jsonData;
  } catch (error) {
    console.error(error);
  }
}

dataFetch();
</script>

<template>
  <h1>Data Fetch</h1>
  <ul>
    <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
  </ul>
</template>

<style scoped></style>
