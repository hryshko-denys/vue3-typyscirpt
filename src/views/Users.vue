<template>
  <div class="card">
    <h1>Пользователи</h1>

    <p style="color: red;" v-if="error">{{ error }}</p>

    <Suspense v-else>
      <user-list />
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref } from "vue";
import UserList from "@/components/UserList.vue";

export default defineComponent({
  setup() {
    const error = ref<null | unknown>(null);

    onErrorCaptured((er) => {
      error.value = er;
      return true
    });
    return {
      error,
      title: "Как Vue работает с TypeScript?",
    };
  },
  components: { UserList },
});
</script>
