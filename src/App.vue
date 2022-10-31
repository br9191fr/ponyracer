<template>
  <main class="container" style="margin-top: 70px">
    <h1>Ponyracer</h1>
    <h2>{{numberOfUsers}} users</h2>
    <Races></Races>

  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Races from "@/components/Races.vue";

export default defineComponent({
  name: 'App',
  setup() {
    const numberOfUsers = ref(146);
    // update the counter after 3 seconds
    // but the template does not reflect the new value
    setTimeout(() => (numberOfUsers.value = numberOfUsers.value+ 1), 3000);
    return {numberOfUsers};
  },
  components: {
    Races}
});
</script>

<style></style>
