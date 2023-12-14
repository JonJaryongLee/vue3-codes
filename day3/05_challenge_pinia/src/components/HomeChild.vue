<script setup>
import GrandChild from "./GrandChild.vue";
import { useUserInfoStore } from "@/stores/userInfo";

const userInfo = useUserInfoStore();
</script>

<template>
  <h2>HomeChild</h2>
  <p>{{ userInfo.name }}</p>
  <p>{{ userInfo.age }}</p>
  <button @click="userInfo.setName('tom')">이름 변경</button>
  <GrandChild />
</template>

<style scoped></style>
