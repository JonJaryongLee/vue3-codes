<script setup>
import { useBoardStore } from "@/stores/board";
import { RouterLink } from "vue-router";

const board = useBoardStore();
</script>

<template>
  <h1>게시판</h1>
  <RouterLink :to="{ name: 'create' }">글 작성</RouterLink>
  <ul v-if="board.articles.length">
    <li v-for="article in board.articles" :key="article.id">
      <RouterLink :to="{ name: 'detail', params: { id: article.id } }">{{
        article.title
      }}</RouterLink>
      - {{ article.author }}
    </li>
  </ul>
  <p v-else>글이 없습니다.</p>
</template>

<style scoped></style>
