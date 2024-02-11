<template>
  <form @submit.prevent="handleSignOut">
    <button type="submit">Sign Out</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useEmployeeInfoStore } from "@/store/useEmployeeInfoStore";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "UserSignOut",
  setup() {
    const router = useRouter();
    const store = useEmployeeInfoStore();

    const handleSignOut = () => {
      store.signOut();
      router.push({ name: "login" });
    };

    return {
      handleSignOut,
    };
  },
});
</script>
