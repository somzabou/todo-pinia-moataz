<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from "vue";
import { useRouter } from "vue-router";
import { useEmployeeInfoStore } from "../store/useEmployeeInfoStore";

export default defineComponent({
  name: "UserLogin",
  setup() {
    const router = useRouter();
    const store = useEmployeeInfoStore();
    const email = ref("");
    const password = ref("");

    const login = async () => {
      await store.login(email.value, password.value);
      console.log(email);
      if (store.currentUser) {
        await nextTick();
        console.log(email);
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
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
