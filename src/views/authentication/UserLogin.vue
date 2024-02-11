<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit" :disabled="!email || !password">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from "vue";
import { useRouter } from "vue-router";
import { useEmployeeInfoStore } from "@/store/useEmployeeInfoStore";

export default defineComponent({
  name: "UserLogin",
  setup() {
    const router = useRouter();
    const store = useEmployeeInfoStore();
    const email = ref("");
    const password = ref("");

    const login = async () => {
      await store.login(email.value, password.value);
      if (store.currentUser) {
        await nextTick();
        router.push({ name: "TodoApp" });
      } else {
        console.error("Login failed");
      }
    };
    return {
      email,
      password,
      login,
    };
  },
});
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: auto; /* Center horizontally */
  padding: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 200px; /* Adjust the distance from the bottom */
  left: 0;
  right: 0;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f8f8f8;
}

button {
  padding: 12px;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2980b9;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
