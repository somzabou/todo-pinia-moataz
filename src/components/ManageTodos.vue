<template>
  <div>
    <h1>Manage Todos</h1>
    <p>Todo ID: {{ mangeTodo.todoId }}</p>
    <p>Department ID: {{ mangeTodo.departmentId }}</p>
    <p>Department Name: {{ mangeTodo.departmentName }}</p>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ManageTodos",
  data() {
    return {
      mangeTodo: {
        todoId: "John Doe",
        departmentId: "Software Developer",
        departmentName: "Engineering",
      },
    };
  },
});
</script>

<style scoped></style>
