<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToDetail(n) {
  router.push({ name: "detail", params: { id: n } })
}
</script>

<template>
  <h1>Board</h1>
  <div>
    <RouterLink :to="{ name: 'detail', params: { id: '1' } }">
      1번 페이지
    </RouterLink>
  </div>
  <button @click="goToDetail(1)">1번 페이지</button>
</template>

