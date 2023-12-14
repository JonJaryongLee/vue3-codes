<script setup>
import { ref, computed } from "vue";
const num = ref(1);
const isOneToTen = computed(() => num.value <= 10 && num.value >= 1);
</script>

<template>
  <h1>1부터 10까지만</h1>
  <button @click="num--">-</button>
  <button @click="num++">+</button>
  <p v-if="isOneToTen">{{ num }}</p>
</template>

<style scoped></style>
