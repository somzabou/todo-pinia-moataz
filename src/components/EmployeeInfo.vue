<template>
  <div class="employee-info">
    <h1>Manage Employee</h1>
    <form @submit.prevent="addEmployee">
      <input v-model="newEmployee.name" placeholder="Name" required />
      <input v-model="newEmployee.position" placeholder="Position" required />
      <input
        v-model="newEmployee.department"
        placeholder="Department"
        required
      />
      <button type="submit">Add Employee</button>
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
    const newEmployee = ref({ name: "", position: "", department: "" });

    const addEmployee = () => {
      store.addEmployee(
        newEmployee.value.name,
        newEmployee.value.position,
        newEmployee.value.department
      );
      newEmployee.value = { name: "", position: "", department: "" };
    };

    return {
      employees: store.employees,
      newEmployee,
      addEmployee,
    };
  },
  // Your component options here
});
</script>

<!-- Your styles here -->
