<template>
  <div id="app">
    <div id="nav">
      <router-link to="/todo-app">Todo App</router-link> |
      <router-link to="/employee-info">Manage Employee</router-link> |
      <router-link to="/manage-todos">Mange Todos</router-link>
      <router-view />
    </div>
    <div>
      <todo-app />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  background-color: #f7f9fc;
  display: flex;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
