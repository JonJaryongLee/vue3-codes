<script setup>
import { ref } from "vue";

const selectedColor = ref("");

function setSelectedColor(newColor) {
  selectedColor.value = newColor;
}

function checkEvent(e) {
  console.dir(e.target);
}
</script>

<template>
  <h1 :style="{ color: selectedColor }" @click="checkEvent">color</h1>
  <button @click="setSelectedColor('red')">빨강</button>
  <button @click="setSelectedColor('blue')">파랑</button>
</template>

<style scoped></style>
