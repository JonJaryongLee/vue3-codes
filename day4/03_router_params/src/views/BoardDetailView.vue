<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <h1>{{ route.params.id }}번 글 상세페이지</h1>
</template>
