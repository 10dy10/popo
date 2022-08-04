import { createWebHistory, createRouter } from "vue-router";
import TheLoading from '@/components/TheLoading.vue';

const routes = [
  {
    path: "/theloading",
    component: TheLoading,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 