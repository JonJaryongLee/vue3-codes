<script setup>
import { useUserStore } from "@/stores/userStore";
import { useBoardStore } from "@/stores/board";
import { RouterLink, useRouter } from "vue-router";
import { ref } from "vue";

const userStore = useUserStore();
const board = useBoardStore();
const router = useRouter();

const inputTitle = ref("");
const inputDescription = ref("");

function postArticle() {
  if (inputTitle.value === "" || inputDescription.value === "") return;

  board.save({
    id: null,
    title: inputTitle.value,
    description: inputDescription.value,
    createdAt: null,
    updatedAt: null,
    author: userStore.currentUser,
  });

  router.push({ name: "board" });
}
</script>

<template>
  <h1>글 작성</h1>
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
