<script setup>
import { useUserInfoStore } from "@/stores/userInfo";

const userInfo = useUserInfoStore();
</script>

<template>
  <h3>GrandChild</h3>
  <p>{{ userInfo.name }}</p>
  <button @click="userInfo.changeAge(1)">나이를 1로 변경</button>
</template>

<style scoped></style>
