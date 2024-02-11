import { defineStore } from "pinia";

export const useAlertStore = defineStore({
  id: "alert",
  state: () => ({
    alert: null as null | { message: string; type: string },
  }),
  actions: {
    success(message: string) {
      this.alert = { message, type: "alert-success" };
    },
    error(message: string) {
      this.alert = { message, type: "alert-danger" };
    },
    clear() {
      this.alert = null;
    },
  },
});
