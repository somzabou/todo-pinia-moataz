<template>
  <div>
    <form @submit.prevent="addItemAndClear">
      <input v-model="employeeId" type="text" placeholder="Employee ID" />
      <input v-model="todo" type="text" placeholder="Todo" />
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
    const employeeId = ref(""); // Add this line
    const store = useTodoListStore();

    function addItemAndClear() {
      if (todo.value.length === 0 || employeeId.value.length === 0) {
        // Check if employeeId is also provided
        store.inputAlert();
        return;
      }
      store.addTodo(todo.value, employeeId.value); // Pass employeeId when adding a todo
      todo.value = "";
      employeeId.value = ""; // Clear the employeeId input field
    }
    return { todo, addItemAndClear, store, employeeId }; // Include employeeId in the returned object
  },
});
</script>

<!-- The rest of your code remains the same -->
