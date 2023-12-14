import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/user/login",
      name: "login",
      component: () => import("../views/user/LoginView.vue"),
    },
    {
      path: "/user/signup",
      name: "signup",
      component: () => import("../views/user/SignupView.vue"),
    },
    {
      path: "/board",
      name: "board",
      component: () => import("../views/board/BoardView.vue"),
    },
    {
      path: "/board/:id",
      name: "detail",
      component: () => import("../views/board/DetailView.vue"),
    },
    {
      path: "/board/create",
      name: "create",
      component: () => import("../views/board/CreateView.vue"),
    },
    {
      path: "/board/:id/update",
      name: "update",
      component: () => import("../views/board/UpdateView.vue"),
    },
  ],
});

export default router;
