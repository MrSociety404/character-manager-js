import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const Details = () => import("../views/Details.vue")
const Error = () => import("../components/Error.vue")
const Edit = () => import("../views/Edit.vue")
const New = () => import("../views/New.vue")

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details/:id",
    name: "Details",
    component: Details,
  },
  {
    path: "/:pathMatch(.*)*",
    component: Error,
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit,
  },
  {
    path: "/new",
    name: "New",
    component: New,
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
