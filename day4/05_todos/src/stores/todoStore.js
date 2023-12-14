import { ref } from "vue";
import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoStore", () => {
  const todos = ref([
    // 데이터 예시
    // {
    //   id: 1,
    //   title: "밥먹기",
    //   isCompleted: false,
    // },
  ]);
  const sequence = ref(0);
  function save(userInput) {
    todos.value.push({
      id: ++sequence.value,
      title: userInput,
      isCompleted: false,
    });
  }
  function deleteById(id) {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  }
  function toggleIsCompleted(id) {
    todos.value = todos.value.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
  }
  return { todos, save, deleteById, toggleIsCompleted };
});
