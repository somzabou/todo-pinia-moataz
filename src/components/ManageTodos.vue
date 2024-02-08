<template>
  <div class="manage-todos">
    <h1>Manage Todos</h1>
    <input
      v-model="employeeId"
      @input="fetchTodos"
      placeholder="Enter employee ID"
    />
    <div class="todo-details" v-for="todo in todos" :key="todo.id">
      <p><strong>Todo ID:</strong> {{ todo.id }}</p>
      <p><strong>Todo:</strong> {{ todo.item }}</p>
      <button @click="deleteTodo(todo.id)">Delete</button>
      <button @click="toggleCompleted(todo.id)">Toggle Completed</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useTodoListStore } from "../store/useTodoListStore";

export default defineComponent({
  name: "ManageTodos",
  data() {
    return {
      employeeId: "",
      todos: [],
    };
  },
  methods: {
    fetchTodos() {
      const todoListStore = useTodoListStore();
      this.todos = todoListStore.getTodosByEmployeeId(this.employeeId);
    },
    deleteTodo(id) {
      const todoListStore = useTodoListStore();
      todoListStore.deleteTodo(id);
    },
    toggleCompleted(id) {
      const todoListStore = useTodoListStore();
      todoListStore.toggleCompleted(id);
    },
  },
});
</script>
