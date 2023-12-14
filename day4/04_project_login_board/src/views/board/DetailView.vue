<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";
import { useBoardStore } from "@/stores/board";
import { useUserStore } from "@/stores/userStore";
import dayjs from "dayjs";

const route = useRoute();
const router = useRouter();
const board = useBoardStore();
const userStore = useUserStore();

function removeArticle() {
  board.deleteById(Number(route.params.id));
  router.push({ name: "board" });
}

function moveUpdatePage() {
  router.push({ name: "update" });
}

const article = board.articles.filter(
  (article) => article.id === Number(route.params.id)
)[0];

if (!article) {
  router.push({ name: "board" });
}

const createdAt = dayjs(article.createdAt).format("YYYY-MM-DD HH:mm");
const updatedAt = dayjs(article.updatedAt).format("YYYY-MM-DD HH:mm");
</script>

<template>
  <template v-if="article">
    <h1>{{ article.title }}</h1>
    <RouterLink :to="{ name: 'board' }">뒤로 가기</RouterLink>
    <p>{{ article.description }}</p>
    <p>작성시간: {{ createdAt }}</p>
    <p>수정시간: {{ updatedAt }}</p>
  </template>
  <template v-if="article.author === userStore.currentUser">
    <button @click="removeArticle">글 삭제</button>
    <button @click="moveUpdatePage">글 수정</button>
  </template>
</template>

<style scoped></style>
