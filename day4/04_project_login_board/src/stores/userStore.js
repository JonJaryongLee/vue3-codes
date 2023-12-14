import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", () => {
  const users = ref([
    // 더미 데이터
    // {
    //   username: "jony123",
    //   password: "123456",
    // },
  ]);
  const currentUser = ref(null);
  function findByUsername(username) {
    const targetUser = users.value.filter(
      (user) => user.username === username
    )[0];
    return targetUser;
  }
  function save(username, password) {
    users.value.push({
      username,
      password,
    });
  }
  function deleteCurrentUser() {
    currentUser.value = null;
  }
  return { users, currentUser, findByUsername, save, deleteCurrentUser };
});
