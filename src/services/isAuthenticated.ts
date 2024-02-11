import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const isAuthenticated = ref(false);
const router = useRouter();

export const login = (email: string, password: string) => {
  if (email === "user@example.com" && password === "password") {
    isAuthenticated.value = true;
    router.push("/todo-app"); // Redirect to the authenticated route
  } else {
    // Handle login failure
    console.error("Invalid credentials");
  }
};

export const logout = () => {
  // Implement your logout logic here
  // For example, clear authentication token, reset user data, etc.
  isAuthenticated.value = false;
  router.push("/login"); // Redirect to the login page after logout
};

export const checkAuthStatus = () => {
  // Implement your logic to check if the user is authenticated
  return computed(() => isAuthenticated.value);
};
