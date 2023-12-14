<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

const inputUsername = ref("");
const inputPassword = ref("");

function login(username) {
  userStore.currentUser = username;
}

function signUp() {
  if (inputUsername.value === "" || inputPassword.value === "") return;
  const user = userStore.findByUsername(inputUsername.value);
  if (!user) {
    userStore.save(inputUsername.value, inputPassword.value);
    login(inputUsername.value);
    router.push({ name: "board" });
  } else {
    alert("이미 존재하는 유저입니다.");
  }
}
</script>

<template>
  <h1>회원가입</h1>
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
      @keyup.enter="signUp"
    />
  </div>
  <button @click="signUp">회원가입</button>
</template>

<style scoped></style>
