<script setup>
import { computed } from "vue";
import { useQuizStore } from "@/stores/quiz";
import { useUserStore } from "@/stores/user";

const quiz = useQuizStore();
const user = useUserStore();

const isCorrect = computed(() => quiz.currentQuiz.answer === user.userSelected);

function runNextQuiz() {
  const isNextQuiz = quiz.runNextQuiz();
  if (isNextQuiz) {
    user.setUserSelected(null);
  } else {
    alert("모든 문제를 풀었습니다");
  }
}
</script>

<template>
  <p v-if="isCorrect">딩동댕!</p>
  <p v-else>땡!</p>
  <p>해설: {{ quiz.currentQuiz.explanation }}</p>
  <button @click="runNextQuiz">다음 문제</button>
</template>

<style scoped></style>
