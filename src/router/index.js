import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details/:id",
    name: "Details",
    component: () => {import("../views/Details.vue")},
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => {import("../components/Error.vue")},
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: () => {import("../views/Edit.vue")},
  },
  {
    path: "/new",
    name: "New",
    component: () => {import("../views/New.vue")},
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`;
  next();
});

export default router;
