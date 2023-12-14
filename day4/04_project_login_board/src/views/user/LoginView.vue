<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

const inputUsername = ref("");
const inputPassword = ref("");

function login() {
  if (inputUsername.value === "" || inputPassword.value === "") return;

  const user = userStore.findByUsername(inputUsername.value);

  if (!user || user.password !== inputPassword.value) {
    alert("로그인 실패");
    return;
  }

  userStore.currentUser = user.username;

  alert("환영합니다");

  router.push({ name: "board" });
}
</script>

<template>
  <h1>로그인</h1>
  <div>
    <input
      type="text"
      placeholder="아이디를 입력하세요"
      v-model="inputUsername"
    />
  </div>
  <div>
    <input
      type="password"
      placeholder="비밀번호를 입력하세요"
      v-model="inputPassword"
      @keyup.enter="login"
    />
  </div>
  <button @click="login">로그인</button>
</template>

<style scoped></style>
