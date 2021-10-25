import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import Edit from "../views/Edit.vue";
import Error from "../components/Error.vue";

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
  { path: "/:pathMatch(.*)*", component: Error },
  {
    path: "/edit",
    name: "Edit",
    component: Edit,
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
