<template>
  <div id="app">
    <div id="nav" class="navbar">
      <div class="navbar-links">
        <router-link v-if="!isAuthenticated" to="/login" class="nav-link"
          >User Login</router-link
        >
        <router-link v-if="!isAuthenticated" to="/register" class="nav-link"
          >User Register</router-link
        >
        <router-link
          v-if="isAuthenticated"
          @click="logout"
          to="/sign-out"
          class="nav-link"
          >User Sign Out</router-link
        >
      </div>
    </div>
    <div v-if="isAuthenticated" class="sidebar">
      <router-link to="/employee-info" class="sidebar-link"
        >Manage Employee</router-link
      >
      <router-link to="/todo-app" class="sidebar-link">Todo App</router-link>
      <router-link to="/manage-todos" class="sidebar-link"
        >Manage Todos</router-link
      >
    </div>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useEmployeeInfoStore } from "@/store/useEmployeeInfoStore";

export default defineComponent({
  name: "App",
  setup() {
    const isAuthenticated = ref(false);
    const employeeStore = useEmployeeInfoStore();

    const logout = () => {
      // Perform logout logic here
      // For example, clear authentication token, reset user data, etc.
      employeeStore.signOut();
    };
    watch(
      () => employeeStore.currentUser,
      (newUser) => {
        isAuthenticated.value = !!newUser;
      }
    );

    return {
      isAuthenticated,
      logout,
    };
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f7f9fc;
  color: #2c3e50;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.navbar {
  background-color: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 1000;
}

.navbar-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #f0f0f0;
}

.sidebar {
  background-color: #eee;
  width: 200px;
  padding: 20px;
  margin-top: 60px; /* Adjust as needed based on the height of your navbar */
}

.sidebar-link {
  display: block;
  color: #333;
  text-decoration: none;
  margin-bottom: 10px;
  transition: color 0.3s ease;
}

.sidebar-link:hover {
  color: #666;
}

.router-view {
  flex: 1;
  padding: 20px;
  margin-top: 60px; /* Adjust as needed based on the height of your navbar */
}
.todo-item span {
  color: #333;
}
</style>
