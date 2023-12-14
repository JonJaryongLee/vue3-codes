<script setup>
import { ref } from "vue";
const isActive = ref(false);
</script>

<template>
  <button @click="isActive = !isActive">토글 버튼</button>
  <p v-if="isActive">짠</p>
</template>

<style scoped>
</style>
