<script setup>
import GrandChild from "./GrandChild.vue";

defineProps({
  name: String,
  age: Number,
});

const emit = defineEmits(["changeName", "changeAge"]);

function changeName(newName) {
  emit("changeName", newName);
}
function changeAge(newAge) {
  emit("changeAge", newAge);
}
</script>

<template>
  <h2>HomeChild</h2>
  <p>{{ name }}</p>
  <p>{{ age }}</p>
  <button @click="changeName('tom')">이름 변경</button>
  <GrandChild :name="name" @changeAge="changeAge" />
</template>

<style scoped></style>
