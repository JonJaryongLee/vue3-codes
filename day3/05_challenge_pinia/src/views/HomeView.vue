<script setup>
import HomeChild from "@/components/HomeChild.vue";
import { useUserInfoStore } from "@/stores/userInfo";

const userInfo = useUserInfoStore();
</script>

<template>
  <h1>HomeView</h1>
  <p>{{ userInfo.name }}</p>
  <p>{{ userInfo.age }}</p>
  <button @click="userInfo.decreseAge">나이를 줄이자</button>
  <HomeChild />
</template>

<style scoped></style>
