<template>
  <div>
    <form @submit.prevent="addItemAndClear">
      <input v-model="todo" type="text" /><button>Add</button>
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
      store.addTodo(todo.value);
      todo.value = "";
    }
    return { todo, addItemAndClear, store };
  },
});
</script>

<style scoped>
form {
  margin-bottom: 15px;
}

input {
  margin-top: 25px;
  margin-bottom: 15px;
  height: 20px;
  width: 50%;
}
button {
  margin-left: 30px;
  background-color: #595656;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-weight: 800;
  color: white;
  width: 15%;
}

.alert-div {
  min-height: 25px;
}

.alert {
  color: #d1495b;
  font-size: 1em;
  font-weight: 600;
}
</style>
