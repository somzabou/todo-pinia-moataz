<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="registerUser" class="register-form">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="form-group">
        <label for="department">Department:</label>
        <input type="text" id="department" v-model="department" required />
      </div>
      <div class="form-group">
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
import { useEmployeeInfoStore } from "../../store/useEmployeeInfoStore";

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
      clearForm();
      successMessage.value = "Registration successful!";
    };

    const clearForm = () => {
      username.value = "";
      email.value = "";
      password.value = "";
      department.value = "";
      position.value = "";
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
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.register-form {
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

input {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f8f8f8;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #007bff;
}

button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

.success-message {
  margin-top: 20px;
  padding: 10px;
  background-color: #dff0d8;
  color: #3c763d;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
}
</style>
