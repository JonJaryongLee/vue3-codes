import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserInfoStore = defineStore("userInfo", () => {
  const name = ref("david");
  const age = ref(10);
  function setName(newName) {
    name.value = newName;
  }
  function setAge(newAge) {
    age.value = newAge;
  }
  function increseAge() {
    age.value--;
  }
  function decreseAge() {
    age.value--;
  }
  return { name, age, setName, setAge, increseAge, decreseAge };
});
