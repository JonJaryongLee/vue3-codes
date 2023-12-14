import { ref } from "vue";
import { defineStore } from "pinia";

export const useBoardStore = defineStore("board", () => {
  const sequence = ref(0);
  const articles = ref([
    // 더미 데이터
    // {
    //   id: 1,
    //   title: "안녕",
    //   description: "다들 뭐해",
    //   createdAt: "",
    //   updatedAt: "",
    //   author: "jony123",
    // },
  ]);

  function save(articleObj) {
    const currentTime = new Date();
    if (articleObj.id === null) {
      articleObj.id = ++sequence.value;
      articleObj.createdAt = currentTime;
      articleObj.updatedAt = currentTime;
      articles.value.push(articleObj);
    } else {
      articles.value = articles.value.map((article) =>
        article.id === articleObj.id
          ? {
              ...article,
              title: articleObj.title,
              description: articleObj.description,
              updatedAt: currentTime,
            }
          : article
      );
    }
  }

  function deleteById(id) {
    articles.value = articles.value.filter((article) => article.id !== id);
  }

  return { articles, save, deleteById };
});
