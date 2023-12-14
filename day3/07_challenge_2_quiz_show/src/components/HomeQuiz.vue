<script setup>
import QuizButtons from "./QuizButtons.vue";
import QuizResult from "./QuizResult.vue";
import { useQuizStore } from "@/stores/quiz";
import { useUserStore } from "@/stores/user";

const quiz = useQuizStore();
const user = useUserStore();
</script>

<template>
  <p>문제: {{ quiz.currentQuiz.question }}</p>
  <QuizButtons />
  <QuizResult v-if="user.userSelected !== null" />
</template>

<style scoped></style>
