<template>
  <div>
    <Alert v-if="error" variant="danger" dismissible @dismissed="error = false">An error occurred while loading.</Alert>
    <Race v-for="race in races" :key="race.id" :raceModel="race"/>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {RaceModel} from '@/models/RaceModel';
import {useRaceService} from '@/composables/RaceService';
import Race from '@/components/Race.vue';

const races = ref<Array<RaceModel>>([]);
const raceService = useRaceService();
const error = ref(false);
onMounted(async () => {
  try {
    races.value = await raceService.list();
  } catch (e) {
    error.value = true;
  }
});
</script>
