<template>
  <div>
    <form @submit.prevent="addItemAndClear" class="todo-form">
      <input v-model="todo" type="text" placeholder="Add a new todo" />
      <button>Add</button>
      <div class="alert-div">
        <div v-show="store.showAlert" class="alert">
          Please type something...
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { useTodoListStore } from "../store/useTodoListStore";

export default defineComponent({
  setup() {
    const todo = ref("");
    const store = useTodoListStore();

    function addItemAndClear() {
      if (todo.value.length === 0) {
        store.inputAlert();
        return;
      }

      const employeeId = Date.now().toString();
      store.addTodo(todo.value, employeeId);

      todo.value = "";
    }

    return { todo, addItemAndClear, store };
  },
});
</script>

<style scoped>
.todo-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

.alert-div {
  margin-top: 10px;
}

.alert {
  color: #dc3545;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  padding: 10px;
  display: inline-block;
}
</style>
