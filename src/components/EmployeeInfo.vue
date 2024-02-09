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
    <button @click="showEmployees = !showEmployees">
      {{ showEmployees ? "Hide" : "Show" }} Employees
    </button>
    <div v-if="showEmployees">
      <template v-for="employee in employees" :key="employee.id">
        <div class="info-details">
          <p><strong>Name:</strong> {{ employee.name }}</p>
          <p><strong>Position:</strong> {{ employee.position }}</p>
          <p><strong>Department:</strong> {{ employee.department }}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useEmployeeInfoStore } from "../store/useEmployeeInfoStore";

export default defineComponent({
  name: "EmployeeInfo",
  setup() {
    const store = useEmployeeInfoStore();
    const newEmployee = ref({ name: "", position: "", department: "" });
    const showEmployees = ref(false);
    const showEmployeesByDepartment = ref(false);

    const addEmployee = () => {
      store.addEmployee(
        newEmployee.value.name,
        newEmployee.value.position,
        newEmployee.value.department
      );
      newEmployee.value = { name: "", position: "", department: "" };
    };

    const employeesByDepartment = computed(() => {
      if (showEmployeesByDepartment.value) {
        return store.employees.filter(
          (employee) => employee.department === newEmployee.value.department
        );
      } else {
        return [];
      }
    });

    return {
      employees: store.employees,
      newEmployee,
      addEmployee,
      showEmployees,
      showEmployeesByDepartment,
      employeesByDepartment,
    };
  },
});
</script>
