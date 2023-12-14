<script setup>
import { ref } from "vue";
const selectedColor = ref("");
</script>

<template>
  <h1 :style="{ color: selectedColor }">color</h1>
  <input type="text" v-model="selectedColor" />
</template>

<style scoped></style>
