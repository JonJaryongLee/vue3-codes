<script setup>
import { useUserStore } from "@/stores/user";

const user = useUserStore();
</script>

<template>
  <button @click="user.setUserSelected(true)">O</button>
  <button @click="user.setUserSelected(false)">X</button>
</template>

<style scoped></style>
