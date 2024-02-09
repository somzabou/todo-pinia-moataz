import { createRouter, createWebHistory } from "vue-router";
import EmployeeInfo from "./components/EmployeeInfo.vue";
import TodoApp from "./components/TodoApp.vue";
import ManageTodos from "./components/ManageTodos.vue";
import UserLogin from "./components/UserLogin.vue";
import UserRegister from "./components/UserRegister.vue";

const routes = [
  {
    path: "/register",
    name: "register",
    component: UserRegister,
  },
  {
    path: "/login",
    name: "login",
    component: UserLogin,
  },
  {
    path: "/employee-info",
    name: "EmployeeInfo",
    component: EmployeeInfo,
    meta: { requiresAuth: true }, // Add meta field to indicate authentication requirement
  },
  {
    path: "/todo-app",
    name: "TodoApp",
    component: TodoApp,
    meta: { requiresAuth: true }, // Add meta field to indicate authentication requirement
  },
  {
    path: "/manage-todos",
    name: "ManageTodos",
    component: ManageTodos,
    meta: { requiresAuth: true }, // Add meta field to indicate authentication requirement
  },
  // Other routes...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Add navigation guard to check authentication before accessing protected routes
router.beforeEach((to, from, next) => {
  // const isAuthenticated = false;
  if (to.meta.requiresAuth) {
    next({ name: "login" }); // Redirect to login page if not authenticated
  } else {
    next(); // Proceed to the requested route
  }
});

export default router;
