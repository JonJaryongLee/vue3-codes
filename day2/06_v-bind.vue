<script setup>
import { ref } from "vue";

const url = ref("");

function setUrl(newUrl) {
  url.value = newUrl;
}
</script>

<template>
  <a :href="url">어디로 갈까</a>
  <div>
    <button @click="setUrl('https://naver.com')">네이버</button>
    <button @click="setUrl('https://google.com')">구글</button>
  </div>
</template>

<style scoped></style>
