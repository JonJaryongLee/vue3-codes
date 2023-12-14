<script setup>
import HomeQuiz from "@/components/HomeQuiz.vue";
import { ref } from "vue";

const mode = ref("start");
</script>

<template>
  <h1>퀴즈쇼</h1>
  <button v-if="mode === 'start'" @click="mode = quiz">시작하기</button>
  <HomeQuiz v-else />
</template>

<style scoped></style>
