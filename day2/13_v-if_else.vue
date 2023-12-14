<script setup>
import { ref } from "vue";
const userInput = ref("");
</script>

<template>
  <input type="text" placeholder="A B C" v-model="userInput" />
  <p v-if="userInput === 'A'">A</p>
  <p v-else-if="userInput === 'B'">B</p>
  <p v-else-if="userInput === 'C'">C</p>
  <p v-else>A B C 가 아닙니다</p>
</template>

<style scoped>
</style>