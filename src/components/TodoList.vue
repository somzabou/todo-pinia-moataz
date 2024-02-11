<template>
  <div class="todo-list">
    <div v-for="todo in todoList" :key="todo.id" class="todo-item">
      <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
      <div class="todo-actions">
        <span @click.stop="toggleCompleted(todo.id)" class="action-icon">
          <i class="fas fa-check">&#10003;</i>
        </span>
        <span @click="deleteTodo(todo.id)" class="action-icon delete-icon">
          <i class="fas fa-trash">&#128465;</i>
        </span>
        <span @click="editTodo(todo.id)" class="action-icon delete-icon">
          <i class="fas fa-trash">&#9998;</i>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTodoListStore } from "../store/useTodoListStore";
import { storeToRefs } from "pinia";

export default defineComponent({
  setup() {
    const store = useTodoListStore();
    const { todoList } = storeToRefs(store);
    const { toggleCompleted, deleteTodo } = store;
    const editTodo = (id: number) => {
      const newText = prompt("Enter new text for the todo item:");
      if (newText) {
        store.editTodo(id, newText);
      }
    };

    return { todoList, toggleCompleted, deleteTodo, editTodo };
  },
});
</script>

<style scoped>
.todo-list {
  display: center;
  flex-direction: column;
  align-items: center;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.todo-item:hover {
  background-color: #f5f5f5;
}

.todo-item .completed {
  text-decoration: line-through;
  color: #999;
}

.todo-actions {
  display: flex;
  gap: 10px;
}

.action-icon {
  cursor: pointer;
  font-size: 1.2rem;
  color: #3498db;
  transition: color 0.3s ease;
}

.action-icon:hover {
  display: center;
  color: #007bb5;
}

.delete-icon {
  display: center;
  color: #e74c3c;
}
</style>
