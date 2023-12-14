<script setup>
import { ref, computed } from "vue";
const userInput = ref("");
const result = computed(() => {
  if (userInput.value === "A") return "A";
  else if (userInput.value === "B") return "B";
  else if (userInput.value === "C") return "C";
  else return "A B C 가 아닙니다";
});
</script>

<template>
  <input type="text" placeholder="A B C" v-model="userInput" />
  <p>{{ result }}</p>
</template>

<style scoped></style>
