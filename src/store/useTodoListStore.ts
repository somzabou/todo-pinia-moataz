import { defineStore } from "pinia";

interface ToDoItem {
  item: string;
  id: number;
  completed: boolean;
  employeeId: string;
}

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [] as ToDoItem[],
    id: 0,
    showAlert: false,
  }),
  actions: {
    addTodo(item: string, employeeId: string) {
      this.todoList.push({ item, id: this.id++, completed: false, employeeId }); // Include employeeId when creating a new todo
    },
    deleteTodo(itemID: number) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemID;
      });
    },
    toggleCompleted(idToFind: number) {
      const todo = this.todoList.find((obj) => obj.id === idToFind);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    inputAlert() {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 1000);
    },
    getTodosByEmployeeId(employeeId: string) {
      // Add this method
      return this.todoList.filter((todo) => todo.employeeId === employeeId);
    },
  },
});
