<template>
  <div class="employee-info">
    <h1>Employee Details</h1>
    <div v-if="currentUser" class="details-container">
      <div class="info-details">
        <p><strong>Name:</strong> {{ currentUser.name }}</p>
        <p><strong>Position:</strong> {{ currentUser.position }}</p>
        <p><strong>Department:</strong> {{ currentUser.department }}</p>
        <button @click="editEmployee" class="edit-button">Edit Employee</button>
      </div>
    </div>
    <form v-if="editing" @submit.prevent="updateEmployee" class="edit-form">
      <input v-model="currentUser.name" placeholder="Name" required />
      <input v-model="currentUser.position" placeholder="Position" required />
      <input
        v-model="currentUser.department"
        placeholder="Department"
        required
      />
      <button type="submit" class="update-button">Update Employee</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useEmployeeInfoStore } from "../store/useEmployeeInfoStore";

export default defineComponent({
  name: "EmployeeInfo",
  setup() {
    const store = useEmployeeInfoStore();
    const editing = ref(false);

    const editEmployee = () => {
      editing.value = true;
    };

    const updateEmployee = () => {
      store.updateEmployee(
        store.currentUser!.id,
        store.currentUser!.name,
        store.currentUser!.position,
        store.currentUser!.department
      );
      editing.value = false;
    };

    return {
      currentUser: store.currentUser,
      editing,
      editEmployee,
      updateEmployee,
    };
  },
});
</script>

<style scoped>
.employee-info {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 900vh; /* Set the height to 100% of the viewport height */
}

.details-container {
  margin-top: 20px;
}

.info-details {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.edit-button,
.update-button {
  padding: 10px 15px;
  font-size: 14px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

.edit-button:hover,
.update-button:hover {
  background-color: #2980b9;
}

.edit-form {
  margin-top: 20px;
}
</style>
