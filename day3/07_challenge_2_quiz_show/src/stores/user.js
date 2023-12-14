import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const userSelected = ref(null);

  function setUserSelected(newUserSelected) {
    userSelected.value = newUserSelected;
  }

  return { userSelected, setUserSelected };
});
