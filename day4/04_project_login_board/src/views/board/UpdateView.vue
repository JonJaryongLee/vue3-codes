<script setup>
import { RouterLink, useRouter, useRoute } from "vue-router";
import { useBoardStore } from "@/stores/board";
import { useUserStore } from "@/stores/userStore";
import { ref } from "vue";

const router = useRouter();
const route = useRoute();
const board = useBoardStore();
const userStore = useUserStore();

const inputTitle = ref("");
const inputDescription = ref("");

const article = board.articles.filter(
  (article) => article.id === Number(route.params.id)
)[0];

inputTitle.value = article.title;
inputDescription.value = article.description;

function postArticle() {
  if (inputTitle.value === "" || inputDescription.value === "") return;

  const currentTime = new Date();
  board.save({
    id: Number(route.params.id),
    title: inputTitle.value,
    description: inputDescription.value,
    createdAt: currentTime,
    updatedAt: currentTime,
    author: userStore.currentUser,
  });
  router.push({ name: "board" });
}
</script>

<template>
  <h1>글 수정</h1>
  <RouterLink :to="{ name: 'board' }">뒤로가기</RouterLink>
  <div>
    <input type="text" placeholder="제목을 입력하세요" v-model="inputTitle" />
  </div>
  <div>
    <textarea
      placeholder="내용을 입력하세요"
      v-model="inputDescription"
      @keyup.enter="postArticle"
    ></textarea>
  </div>
  <button @click="postArticle">추가</button>
</template>

<style scoped></style>
