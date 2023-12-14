<script setup>
import { ref } from "vue";
const message = ref("");
</script>

<template>
  <p>message: {{ message }}</p>
  <input type="text" v-model="message" />
</template>

<style scoped></style>
