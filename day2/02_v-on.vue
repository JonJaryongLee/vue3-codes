<script setup>
import { ref } from "vue";
const text = ref("???");
</script>

<template>
  <p>{{ text }}</p>
  <button @click="text = '짜잔'">클릭</button>
</template>

<style scoped>
</style>