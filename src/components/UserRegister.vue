<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="registerUser">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div>
        <label for="department">Department:</label>
        <input type="text" id="department" v-model="department" required />
      </div>
      <div>
        <label for="position">Position:</label>
        <input type="text" id="position" v-model="position" required />
      </div>
      <button type="submit">Register</button>
    </form>
    <div v-if="successMessage" class="success-message">
      {{ successMessage }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useEmployeeInfoStore } from "../store/useEmployeeInfoStore";

export default defineComponent({
  name: "UserRegister",
  setup() {
    const store = useEmployeeInfoStore();
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const department = ref("");
    const position = ref("");
    const successMessage = ref("");

    const registerUser = () => {
      store.registerEmployee(
        username.value,
        email.value,
        password.value,
        department.value,
        position.value
      );
      console.log(
        username.value,
        email.value,
        password.value,
        department.value,
        position.value
      );
      username.value = "";
      email.value = "";
      password.value = "";
      department.value = "";
      position.value = "";
      successMessage.value = "Registration successful!";
    };
    return {
      username,
      email,
      password,
      department,
      position,
      successMessage,
      registerUser,
    };
  },
});
</script>

<style scoped>
.register {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

h1 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}

input {
  padding: 10px;
  margin-bottom: 10px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.success-message {
  margin-top: 10px;
  padding: 10px;
  background-color: #dff0d8;
  color: #3c763d;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
}
</style>
