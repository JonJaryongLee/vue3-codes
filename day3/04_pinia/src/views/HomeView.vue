<script setup>
import {useCounterStore } from "@/stores/counter";
import HomeChild from "@/components/HomeChild.vue";

const counter = useCounterStore();
counter.count++  // 0 -> 1
counter.increment()  // 1 -> 2
</script>

<template>
  <h1>HomeView</h1>
  <p>count: {{ counter.count }}</p>
  <p>doubleCount: {{ counter.doubleCount }}</p>
  <button>나이를 줄이자</button>
  <HomeChild />
</template>

<style scoped></style>
