import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/TheMain";
// import NotFound from "@/components/NotFound";

const routes = [
  {
    path: '/',
    component: Home
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 