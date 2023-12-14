import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useQuizStore = defineStore("quiz", () => {
  const quizSet = [
    {
      id: 1213,
      question: "사자와 호랑이의 교배는 가능하다.",
      answer: true,
      explanation: "두 동물 모두 표범속에 속하므로 교배 가능합니다.",
    },
    {
      id: 3145,
      question: "호주의 수도는 시드니이다.",
      answer: false,
      explanation: "호주의 수도는 캔버라입니다.",
    },
    {
      id: 6199,
      question: "야구공의 실밥 갯수는 108개이다.",
      answer: true,
      explanation: "야구공의 실밥 갯수는 108개가 맞습니다.",
    },
  ];
  const currentIdx = ref(0);

  const currentQuiz = computed(() => quizSet[currentIdx.value]);

  function runNextQuiz() {
    if (currentIdx.value < quizSet.length - 1) {
      currentIdx.value = currentIdx.value + 1;
      return true;
    } else {
      return false;
    }
  }

  return { quizSet, currentIdx, currentQuiz, runNextQuiz };
});
