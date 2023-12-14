<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";

import { useUserStore } from "@/stores/userStore";

const router = useRouter();
const userStore = useUserStore();

function logout() {
  userStore.deleteCurrentUser();
  router.push({ name: "home" });
}
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        </li>
        <template v-if="!userStore.currentUser">
          <li>
            <RouterLink :to="{ name: 'login' }">로그인</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'signup' }">회원가입</RouterLink>
          </li>
        </template>
        <li v-else>
          <RouterLink :to="{ name: 'board' }">게시판</RouterLink>
        </li>
      </ul>
    </nav>
    <template v-if="userStore.currentUser">
      <p>현재 유저: {{ userStore.currentUser }}</p>
      <button @click="logout">로그아웃</button>
    </template>
  </header>
  <RouterView />
</template>

<style scoped></style>
