<script setup>
import { ref } from "vue";

const message = ref("글자를 지워보자");
</script>

<template>
  <input type="text" v-model="message" />
  <input type="text" :value="message" />
</template>
