import { createRouter, createWebHistory } from "vue-router";
import EmployeeInfo from "./components/EmployeeInfo.vue";
import TodoApp from "./components/TodoApp.vue";
import ManageTodos from "./components/ManageTodos.vue";
import UserLogin from "./views/authentication/UserLogin.vue";
import UserRegister from "./views/authentication/UserRegister.vue";
import { useEmployeeInfoStore } from "./store/useEmployeeInfoStore";
import UserSignOut from "./views/authentication/UserSignOut.vue";

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
  {
    path: "/sign-out",
    name: "SignOut",
    component: UserSignOut, // Replace "SignOut" with the component that handles sign out functionality
    meta: { requiresAuth: true }, // Add meta field to indicate authentication requirement
  },
  // Other routes...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ name: "login" }); // Redirect to login page if not authenticated
  } else {
    next(); // Proceed to the requested route
  }
});

function isAuthenticated() {
  // Replace this logic with your actual authentication check
  const store = useEmployeeInfoStore();
  return !!store.currentUser;
}
export default router;
