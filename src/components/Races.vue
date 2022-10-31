<template>
  <div>
    <h2>Races</h2>
    <button @click="save()">Save</button>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "Races",
  setup() {
    function save() {
      // Do something when user saves
      console.log('Click on save');
    }

    return {
      save
    };
  }
});
</script>

<style scoped>

</style>