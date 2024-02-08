<template>
  <div>
    <h1>Employee Information</h1>
    <p>Name: {{ employee.name }}</p>
    <p>Position: {{ employee.position }}</p>
    <p>Department: {{ employee.department }}</p>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "EmployeeInfo",
  data() {
    return {
      employee: {
        name: "John Doe",
        position: "Software Developer",
        department: "Engineering",
      },
    };
  },
  // Your component options here
});
</script>

<style scoped></style>
