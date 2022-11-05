<template>
  <div>
    <h2>{{ raceModel.name }}</h2>
    <p>{{ startInstant }}</p>
    <div class="col" v-for="pony in raceModel.ponies" :key="pony.id">
      <Pony :ponyModel="pony" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RaceModel } from '@/models/RaceModel';
import Pony from '@/components/Pony.vue';
import fromNow from '@/utils/FromNow';

const props = defineProps<{
  raceModel: RaceModel;
}>();

const startInstant = computed(() => fromNow(props.raceModel.startInstant));
</script>

<style scoped></style>
