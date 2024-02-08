import { createRouter, createWebHistory } from "vue-router";
import EmployeeInfo from "./components/EmployeeInfo.vue";
import TodoApp from "./components/TodoApp.vue";
import ManageTodos from "./components/ManageTodos.vue";

const routes = [
  {
    path: "/employee-info",
    name: "EmployeeInfo",
    component: EmployeeInfo,
  },
  {
    path: "/todo-app",
    name: "TodoApp",
    component: TodoApp,
  },
  {
    path: "/manage-todos",
    name: "ManageTodos",
    component: ManageTodos,
  },
  // Other routes...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
